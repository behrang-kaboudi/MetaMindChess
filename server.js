process.env.mainDir = __dirname;
const { app, io } = require('./src/routes/main');
const testRout = require('./src/routes/test');
app.use('/test/', testRout);
// مدیریت رویدادهای Socket.io
io.on('connection', (socket) => {
  console.log('A client connected.');

  // رویداد "test" از سمت کلاینت
  io.on('connection', (socket) => {
    // تابع داخلی برای مدیریت رویدادهای تکراری
    function handleSocketEvent(eventName, route) {
      socket.on(eventName, async (data, ack) => {
        try {
          await route.io.ioF(data, ack);
        } catch (error) {
          console.error(`Error processing ${eventName} event:`, error);
          if (ack) ack('Error occurred while processing event.');
        }
      });
    }
    //TODO:  after add user router
    // let userData = user.setUserObjFromCoockies(socket.request.headers.cookie);

    // if (userData) {
    //   const personalRoom = 'user-' + userData.userName;
    //   socket.join(personalRoom);
    //   user.setOnline(userData.userName, true);
    // } else {
    //   userData = {};
    // }
    // استفاده از تابع برای رویداد 'test' با استفاده از testRout
    handleSocketEvent('test', testRout);
  
    // استفاده از تابع برای رویداد 'test2' با استفاده از testRout2
    //handleSocketEvent('test2', testRout2);
  });
  
});
