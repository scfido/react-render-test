# React父子组件重绘影响示例

本实例演示父组件状态更新时,以不同方式传属性给`普通`和`useMemo`包装的子组件对重绘的影响,分别演示了`useState`、`funcation`、`useCallback`三种传入方式。

## 结论

1. 父组件改变时，子组件的代码会被执行。
2. 子组件执行后如果props未改变，DOM不会更新，占用资源很小可以忽略
3. 如果子组件代码执行很费资源，应使用useMemo包装子组件，确保props未变时不执行代码
4. props中传入的function应使用useCallback包装。

## 运行

```sh
git clone https://github.com/scfido/react-render-test.git
cd react-render-test
pnpm install
pnpm start
```
