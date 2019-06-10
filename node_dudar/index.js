var express = require('express');
var mocha = require('mocha');

var app = express();

app.get('/', function (req, res) {
  // выводим текст на страницу браузера, когда попадаем на главную страницу
  res.sendFile(__dirname + "/index.html");
});

app.get('/about', function (req, res) {
  // выводим текст на страницу браузера, когда попадаем на главную страницу
  res.sendFile(__dirname + "/about.html");
});

app.get('/news/:name/:id', function (req, res) {
  // выводим текст на страницу браузера, когда попадаем на главную страницу
  res.send('ID is - ' + req.params.name + req.params.id);
});

// настраиваем сервер: указываем, какой порт отслеживаем
app.listen(3000);
