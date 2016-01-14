# Image Placeholder Generator Base on GraphicsMagick

![Image Placeholder Tool](http://songxc.github.io/images/image-placeholder-tool-gm.jpg)

## Introduction

#### Dependencies

- [Express](http://expressjs.com/)
- [GraphicsMagick](http://www.graphicsmagick.org/)
- [gm](https://www.npmjs.com/package/gm/)

#### Demo

Visit after start service.

- Presentation：<http://127.0.0.1:3000/demo/blur/index.html>  
- Generator：<http://127.0.0.1:3000/demo/blur/tool.html>

#### API
    
    url: http://127.0.0.1:3000/blur
    params:
        {String} callback: callback function name. default: empty;
        {String} src: input image url;
        {Integer} size: output image size. default: 30, maximum: 100;
        {Float} sigma: standard deviation, bigger leads to more blurry. default: 0.1, maximum: 7;
    result:
        {Boolean} success: status;
        {String} message: status message;
        {String} errMessage: error message;
        {String} src: input image url;
        {String} size: output image size;
        {String} sigma: standard deviation;
        {String} imgDataURL: output image data url（Base64）;


## Deploy

#### Initialize

1. [express](http://expressjs.com/)：``npm install express --save``
2. [express-generator](https://www.npmjs.com/package/express-generator)：``npm install express-generator -g``
3. [yeoman](http://yeoman.io/)：``npm install yo -g``
4. ``yo express``

#### Update

1. Update [Homebrew](http://brew.sh/)：``brew update``
2. Update Software：``brew upgrade``
3. Install wget：``brew install wget``

#### Install

1. [GraphicsMagick](http://www.graphicsmagick.org/)：``brew install graphicsmagick``（For Mac）
2. [gm](https://www.npmjs.com/package/gm)：``npm install gm``
3. [nodemon](https://www.npmjs.com/package/nodemon)：``npm install nodemon -g``
4. ``npm install``

#### Start

``nodemon ./bin/www``


## Reference

> <a href="http://javascript.ruanyifeng.com/nodejs/express.html" target="_blank">Express</a>    
> <a href="http://blog.csdn.net/zs877497410/article/details/10161069" target="_blank">ImageMagick v6 Examples -- Blurring and Sharpening Images</a>  
> <a href="http://www.imagemagick.org/Usage/blur/" target="_blank">ImageMagick开源项目-详细命令解释</a>  
> <a href="https://nodejs.org/api/buffer.html#buffer_buffers_and_character_encodings" target="_blank">Buffers To Base64</a>   
