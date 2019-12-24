
import { useState, memo, Component } from 'react';
import styles from './index.css';
import HooksButton from "./components/HooksButton";
import MemoHooksButton from "./components/MemoHooksButton";
import ClassButton from "./components/ClassButton";
import PureButton from "./components/PureButton";



export default class MyButton extends Component {

  constructor(props) {
    super(props);
    this.button = {
      text: "render"
    };
  }

  state = {
    button: { text: "render" },
    count: 0
  };

  getButton() {
    return { text: "render" };
  }

  render() {

    const constButton = {
      text: "render"
    };


    return (
      <div>
        <h1>重绘演示</h1>
        <p>
          本实例演示父组件状态更新时,以不同方式传属性给子组件对重绘的影响.分别演示了成员变量、State、函数返回值、常量四种传入方式。
          数据未变的情况下要减少子组件重绘，最简单的方法是使用react pure component，并确保props对象的引用未变化。
        </p>
        <div>
          <p>计数:{this.state.count}</p>
          <input ></input>
          <button onClick={e => this.setState({ count: this.state.count + 1 })}>+</button>
          <button onClick={e => this.setState({ count: this.state.count - 1 })}>-</button>
        </div>
        <div>
          <p>传入成员变量</p>
          <HooksButton text={this.button} />
          <MemoHooksButton text={this.button} />
          <PureButton text={this.button} />
          <ClassButton text={this.button} />

          <p>传入state</p>
          <HooksButton text={this.state.button} />
          <MemoHooksButton text={this.state.button} />
          <PureButton text={this.state.button} />
          <ClassButton text={this.state.button} />

          <p>传入函数</p>
          <HooksButton text={this.getButton()} />
          <MemoHooksButton text={this.getButton()} />
          <PureButton text={this.getButton()} />
          <ClassButton text={this.getButton()} />

          <p>传入常量</p>
          <HooksButton text={constButton} />
          <MemoHooksButton text={constButton} />
          <PureButton text={constButton} />
          <ClassButton text={constButton} />
        </div>
      </div>
    );
  }
}


// export default function () {
//   const [count, setCount] = useState(0);
//   const [valueFromState, setValue] = useState({ text: "state" });

//   const val = { text: "state" };
//   function getText() {
//     return val;
//   }

//   return (
//     <div className={styles.normal}>
//       <h1>Page index</h1>
//       <div>
//         <p>计数:{count}</p>
//         <input ></input>
//         <button onClick={e => setCount(count + 1)}>+</button>
//         <button onClick={e => setCount(count - 1)}>-</button>
//       </div>
//       <div>
//         <HooksButton text={val} />
//         <ClassButton text={val} />
//         <PureButton text={val} />
//       </div>
//     </div>
//   );
// };
