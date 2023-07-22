
import { useState, memo, Component, useCallback } from 'react';
import styles from './index.css';
import Button from "./components/Button";
import MemoButton from "./components/MemoButton";

export default () => {

  const [text, setText] = useState("render");
  const [count, setCount] = useState(0);

  const getText = () => {
    return text;
  }

  const getTextCallback = useCallback(getText, [])

  return (
    <div>
      <h1>重绘演示</h1>
      <p>
        本实例演示父组件状态更新时,以不同方式传属性给普通和useMemo包装的子组件对重绘的影响,分别演示了useState、funcation、useCallback三种传入方式。
      </p>
      <p>
        <strong>结论：</strong>
        <ul style={{ display: "flex", flexDirection: "column"}}>
          <li>1. 父组件改变时，子组件的代码会被执行。</li>
          <li>2. 子组件执行后如果props未改变，DOM不会更新，占用资源很小可以忽略</li>
          <li>3. 如果子组件代码执行很费资源，应使用useMemo包装子组件，确保props未变时不执行代码</li>
          <li>4. props中传入的function应使用useCallback包装。</li>
        </ul>
      </p>
      <div>
        <h2>触发</h2>
        <p>在这里输入数据或按按钮，触发父组件刷新。</p>
        <input onChange={e => setText(e.target.value)} value={text}></input>

        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
      </div>
      <div>
        <h2>一、传入state</h2>
        <p>普通组件：父组件刷新时子组件的Props改变就会刷新。</p>
        <Button text={text} />
        <p>Memo包装的组件：父组件刷新，只要props未改变就不会执行组件代码</p>
        <MemoButton text={text} />

        <h2>二、传入函数</h2>
        <p>普通组件：每次都刷新。</p>
        <Button requestText={getText} />
        <p>Memo包装的组件：传入普通函数，父组件刷新导致函数对象改变，因此子组件也刷新了。</p>
        <MemoButton requestText={getText} />

        <h2>三、使用Callback包裹</h2>
        <p>普通组件：每次都刷新。</p>
        <Button requestText={getTextCallback} />
        <p>Memo包装的组件：传入useCallback包装的函数，父组件刷新时因为props未改变，它不会更新。</p>
        <MemoButton requestText={getTextCallback} />
      </div>
    </div>
  );
}

