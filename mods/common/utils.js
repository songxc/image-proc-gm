module.exports = {
  /**
   * 获取压缩后的图片尺寸
   * @param beforeW 原图宽度
   * @param beforeH 原图高度
   * @param afterW CDN 后缀宽度
   * @param afterH CDN 后缀高度
   * @returns {{width: '压缩后图片宽度', height: '压缩后图片高度'}}
   */
  genCompressedImgSize: function(beforeW, beforeH, afterW, afterH) {
    if (beforeW <= afterW && beforeH <= afterH) { // 原图比 CDN 尺寸小, 直接返回
      return {
        width: beforeW,
        height: beforeH
      };
    } else {
      // 取长边
      var rate = Math.max(beforeW / afterW, beforeH / afterH);
      return {
        width: Math.round(beforeW / rate),
        height: Math.round(beforeH / rate)
      };
    }
  }
};
