var Express = require('express');
var Router = Express.Router();
var Del = require('delete');
var ModGenThumb = require('../mods/blur/index');
var MyDownload = require('../common/download');

Router.get('/', function(req, res) {
  // 回调名
  var paramCallback = req.query.callback;
  // 图片地址
  var paramSrc = req.query.src;
  // 输出图片尺寸
  var paramSize = req.query.size;
  // 标准偏移量
  var paramSigma = req.query.sigma;

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

  // 标准偏移量
  var sigma = !isNaN(paramSigma) ? parseFloat(paramSigma) : 0.1;
  // 控制最小值
  sigma = Math.max(sigma, 0.1);
  // 控制最大值
  sigma = Math.min(sigma, 7);

  // 下载图片
  MyDownload.downloadFiles(paramSrc)
    .then(function(filePath) {
      // 处理图片
      ModGenThumb.processImage(filePath, size, sigma)
        .then(function(imgDataURL) {
          // 输出到客户端
          res.render('blur', {
            title: '缩略图服务',
            callback: paramCallback,
            data: {
              success: true,
              src: paramSrc,
              size: size,
              sigma: sigma,
              imgDataURL: imgDataURL
            }
          });
          // 删除图片
          Del(filePath, function(err) {
            if (err) throw err;
          });
        })
        .catch(function(err) {
          res.render('blur', {
            title: '缩略图服务',
            callback: paramCallback,
            data: {
              success: false,
              message: '处理图片时出错',
              errMessage: err.message,
              src: paramSrc,
              size: size,
              sigma: sigma
            }
          });
          // 删除图片
          Del(filePath, function(err) {
            if (err) throw err;
          });
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
          sigma: sigma
        }
      });
    });
});

module.exports = Router;
