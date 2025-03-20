

// تنظیم متغیرهای محیطی
process.env.PORT = process.env.PORT || 3000;

const express = require('express');
const path = require('path');
const http = require('http');
const ioSocket = require('socket.io');
// const mongoose = require('mongoose'); // در صورت نیاز به اتصال به پایگاه داده

const app = express();

// تنظیم view engine و مسیر فایل‌های EJS
app.set('view engine', 'ejs');
app.set('views', path.join(process.env.mainDir,'src', 'views'));
// سرو کردن فایل‌های استاتیک از پوشه public
app.use('/public', express.static(path.join(process.env.mainDir, 'public')));
// سرو کردن فایل‌های استاتیک از پوشه public
app.use(express.static(path.join(process.env.mainDir, 'public')));

// در صورت نیاز به دسترسی به فایل‌های node_modules، از مسیر جداگانه /modules استفاده کنید
app.use('/modules', express.static(path.join(process.env.mainDir, 'node_modules')));

// رندر صفحه اصلی (برای مثال testSbk.ejs)

app.use((req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  next();
});

app.get('/', (req, res) => {
  console.log('dd')
  const query = req.query.q;
  console.log('dd',query,req.query)
  res.render('index', { title: 'Home Page1234', message: 'Hello, welcome to our site!Main' });
  //res.render('testSbk');
});

// در صورت نیاز اتصال به پایگاه داده (Mongoose)
// mongoose.connect('mongodb://127.0.0.1/test');

// ایجاد سرور HTTP و Socket.io
const server = http.createServer(app);
const io = ioSocket(server);

server.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
// اکسپورت متغیرها برای استفاده در فایل‌های دیگر (مثلاً روترها)
module.exports = { express, app, io };

