const { express, io } = require('./main');
// for database 
// const test = require("../modules/test");
// we should decler rout  in here for each router. if not get function will be over write
const rout = express.Router();
// in rout.get('/' we can get user rout afte test with rout.get('/user rout'
// in res.render('test'); we write ejs file name
rout.get('/', (req, res) => {
    res.render('test/test');
});
rout.get('/test2/', (req, res) => {
    res.render('test/test2');
});
rout.get('/test2/:id', (req, res) => {
    
    res.render('test/test2');
});
rout.get('/testio/:id/:id2/:id3?', (req, res) => {
    console.log(req.params);
    res.render('test/testIO');
});
// io sample
// below should be included in all files
rout.io = {};
rout.io.ioF = async function (data, ack, userData) {
    if (!data) return;
    await rout.io[data.signal](data, ack, userData);
}

rout.io.testIO = async function (data, ack, userData) {
    console.log(data)
    ack('5');
}
// send data to host 
// brad cast testServerToHost
setTimeout(() => {
    io.emit('testServerToHost', 'gm');
    // io.to('user-' + dbChalenge.requsterUserName).emit('goToPlayPage', page);
}, 1000);

module.exports = rout;