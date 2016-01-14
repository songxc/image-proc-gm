'use strict';
/**
 * 图像虚化算法
 * 参考: https://github.com/whackashoe/antimoderate
 */
var Promise = require('bluebird');
var GM = require('gm');

module.exports = {
  /**
   * 处理图片
   * @param filePath
   * @param size
   * @param sigma
   */
  processImage: function(filePath, size, sigma) {

    return new Promise(function(resolve, reject) {

      GM(filePath)
        .resize(size)
        /**
         * gaussian 函数有两个参数: radius 和 sigma
         * @param {int} radius 用于确定计算时高斯分布数组的大小. 如果没有给出, 或设置为零, GM 将会计算可能的最大半径的高斯分布.
         * @param {float} sigma 决定实际发生模糊的范围.
         * @ref http://www.graphicsmagick.org/GraphicsMagick.html#details-gaussian
         * @ref http://blog.csdn.net/zs877497410/article/details/10161069
         */
        .gaussian(0, sigma)
        .toBuffer('PNG', function(err, buffer) {
          if (!err) {
            var imgDataURL = 'data:image/png;base64,' + buffer.toString('base64');
            resolve(imgDataURL);
          } else {
            reject(err);
          }
        });
    });
  }
};