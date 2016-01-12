var Express = require('express');
var Router = Express.Router();
var ModGenThumb = require('../mods/blur/index');
var ModDownload = require('../mods/common/download');

Router.get('/', function(req, res) {
  // 回调名
  var paramCallback = req.query.callback;
  // 图片地址
  var paramSrc = req.query.src;
  // 输出图片尺寸
  var paramSize = req.query.size;
  // 虚化程度
  var paramRadius = req.query.radius;

  // 未传入图片地址
  if (!paramSrc) {
    res.render('blur', {
      title: '缩略图服务',
      callback: paramCallback,
      data: {
        success: false,
        message: '参数(src)不合法'
      }
    });
    return;
  }

  // 输出图片尺寸
  var size = /^[1-9]\d*$/g.test(paramSize) ? parseInt(paramSize) : 30;
  // 控制最大值
  size = Math.min(size, 100);

  // 模糊半径
  var radius = /^[1-9]\d*$/g.test(paramRadius) ? parseInt(paramRadius) : 1;
  // 控制最大值
  radius = Math.min(radius, 20);
  
  // 下载图片
  ModDownload.downloadFiles(paramSrc)
    .then(function(files) {
      // 处理图片
      ModGenThumb.processImage(files[0]['_contents'], size, radius)
        .then(function(imgDataURL) {
          // 输出到客户端
          res.render('blur', {
            title: '缩略图服务',
            callback: paramCallback,
            data: {
              success: true,
              src: paramSrc,
              size: size,
              radius: radius,
              imgDataURL: imgDataURL
            }
          });
        })
        .catch(function(err) {
          res.render('blur', {
            title: '缩略图服务',
            callback: paramCallback,
            data: {
              success: false,
              message: '下载图片时出错',
              errMessage: err.message,
              src: paramSrc,
              size: size,
              radius: radius
            }
          });
        });
    })
    .catch(function(err) {
      res.render('blur', {
        title: '缩略图服务',
        callback: paramCallback,
        data: {
          success: false,
          message: '传入的图片地址无效',
          errMessage: err.message,
          src: paramSrc,
          size: size,
          radius: radius
        }
      });
    });
});

module.exports = Router;
