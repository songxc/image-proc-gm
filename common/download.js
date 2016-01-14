'use strict';
/**
 * 下载文件
 */
var Path = require('path');
var Download = require('download');
var Promise = require('bluebird');

module.exports = {
  /**
   * 下载文件
   * @param srcUrl 源地址（支持数组）
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
      new Download({mode: '755'})
        .get(srcUrl, destDir)
        .run(function(err, files) { // files 是个数组, 内容结构参考: http://stackoverflow.com/questions/22286900/how-do-i-interact-with-this-file-object-in-a-node-js-stream
          if (err) {
            reject(err);
            return;
          }
          resolve(filePath);
        });
    });
  }
};
