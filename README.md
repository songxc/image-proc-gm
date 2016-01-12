# 基于 Node 的图像处理服务

#### 项目地址

<https://github.com/songxc/image-proc-gm>

#### 示例 Demo

部署成功后访问: <http://127.0.0.1:3000/demo/blur/index.html>  
另外提供一个生成小工具: <http://127.0.0.1:3000/demo/blur/tool.html>

#### API

    params:
        {String} callback: callback 函数名, 默认空;
        {String} src: 输入图片地址;
        {Integer} radius: 图片虚化强度, 值越大越模糊, 默认为 1, 最大值 20;
        {Integer} size: 输出图片尺寸, 默认值为 30, 最大值 100;
    data:
        {Boolean} success: 状态码;
        {String} message: 状态信息;
        {String} errMessage: 错误信息;
        {String} src: 输入图片地址;
        {String} radius: 图片虚化强度;
        {String} size: 输出图片尺寸;
        {String} imgDataURL: 处理后的图片（Base64）;

## 安装

#### 初始化 Express

1. 安装 [express](http://expressjs.com/zh/)：``npm install express --save``
2. 安装 [express-generator](https://www.npmjs.com/package/express-generator)：``npm install express-generator -g``
3. 安装 [yeoman](http://yeoman.io/)：``npm install yo -g``
4. 安装 [nodemon](https://www.npmjs.com/package/nodemon)：``npm install nodemon -g``
5. 初始化项目：``yo express``

#### 配置环境

1. 更新 [Homebrew](http://brew.sh/)：``brew update``
2. 更新过时的软件包：``brew upgrade``
3. 安装 wget：``brew install wget``

#### 安装 Node Canvas

1. 安装 [Cairo](http://cairographics.org/)：``brew install pkg-config cairo libpng jpeg giflib``（For Mac）
2. 安装 [Canvas](https://www.npmjs.com/package/canvas)：``npm install canvas``

#### 安装依赖

``npm install``

#### 启动服务

``nodemon ./bin/www``

#### 参考引用

> <a href="http://javascript.ruanyifeng.com/nodejs/express.html" target="_blank">Express</a>  
> <a href="https://github.com/Automattic/node-canvas" target="_blank">Node Canvas - Canvas graphics API backed by Cairo</a>  
> <a href="https://stackoverflow.com/questions/10692075/which-library-should-i-use-for-server-side-image-manipulation-on-node-js/10717592" target="_blank">Which library should I use for server-side image manipulation on Node.JS?</a>  
> <a href="http://stackoverflow.com/questions/22286900/how-do-i-interact-with-this-file-object-in-a-node-js-stream" target="_blank">How do I interact with this <File> object in a node.js stream?</a>  
> <a href="https://github.com/whackashoe/antimoderate" target="_blank">AntiModerate - The progressive image loading library for great good!</a>  
