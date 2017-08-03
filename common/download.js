'use strict';
/**
 * 下载文件
 */
var Path = require('path');
var download = require('download');
var Promise = require('bluebird');

module.exports = {
  /**
   * 下载文件
   * @param srcUrl 源地址
   * @param destDir 目标目录
   * @returns {bluebird|exports|module.exports}
   */
  downloadFiles: function(srcUrl, destDir) {

    return new Promise(function(resolve, reject) {

      // 下载路径
      destDir = destDir || Path.join(__dirname, '../download');

      // 文件名
      var fileName = srcUrl.split('/').pop();
      // 文件路径
      var filePath = Path.join(destDir, fileName);

      // 下载图片
      download(srcUrl, destDir)
        .then(function() {
          resolve(filePath);
        })
        .catch(function(err) {
          reject(err);
        });
    });
  }
};
