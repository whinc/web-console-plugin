# web-console-plugin

web-console 插件开发模板

克隆本项目，修改`package.json`中的项目名称、版本号、入口文件等，执行`npm install`安装依赖。
>插件命名推荐已`web-console-plugin-`作为前缀，便于搜索。

经过上面操作后，可开始在在`src`目录了下编写插件，运行下面命令开发（支持修改热更新）。
```bash
# 开发插件
npm run serve
```

开发测试完成后，通过下面命令构建和发布插件。

```bash
# 构建插件
npm run build

# 发布插件到 npm 仓库
npm run depoly
```