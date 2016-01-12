'use strict';
/**
 * 纯粹为了告诉自己怎么使用 download 模块~
 * @type {Download|exports|module.exports}
 */
var Path = require('path');
var Del = require('delete');
var Download = require('download');
var Promise = require('bluebird');

module.exports = {
  /**
   * 下载文件
   * @param srcUrl 源地址（支持数组）
   * @param destDir 目标目录
   * @param isDelAfterDownload 下载后是否删除（默认删除）
   * @returns {bluebird|exports|module.exports}
   */
  downloadFiles: function(srcUrl, destDir, isDelAfterDownload) {

    return new Promise(function(resolve, reject) {
      // 默认删除
      if (isDelAfterDownload === undefined) {
        isDelAfterDownload = true;
      }

      // 下载路径
      destDir = destDir || Path.join(__dirname, '../../download');

      // 下载图片
      new Download({mode: '755'})
        .get(srcUrl)
        .dest(destDir)
        .run(function(err, files) { // files 是个数组, 内容结构参考: http://stackoverflow.com/questions/22286900/how-do-i-interact-with-this-file-object-in-a-node-js-stream
          if (err) {
            reject(err);
            return;
          }
          if (isDelAfterDownload) {
            // 文件名
            var fileName = files[0]['relative'];
            var filePath = Path.join(__dirname, '../../download/' + fileName);
            // 删除图片
            Del.promise(filePath)
              .then(function() {
                resolve(files);
              })
              .catch(function(err) {
                reject(err);
              });
          } else {
            resolve(files);
          }
        });
    });
  }
};
