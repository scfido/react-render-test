# react-render-test
React父子组件重绘影响示例

本实例演示父组件状态更新时,以不同方式传属性给子组件对重绘的影响.分别演示了`成员变量`、`State`、`函数`返回值、`常量`四种传入方式。

数据未变的情况下要减少子组件重绘，最简单的方法是使用react `pure component`，并确保`props`对象的`引用`未变化。

## 运行

```sh
git clone https://github.com/scfido/react-render-test.git
cd react-render-test
yarn global add umi
umi dev
```