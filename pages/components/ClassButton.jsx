import { Component } from "react"
import style from "../index.css"

export default class ClassButton extends Component {

  constructor(props) {
    super(props);
  }

  renderCount = 0;

  render() {
    console.log("Render class button")

    const { text } = this.props.text;

    return (
      <div>
        <button className={style.button}>{text} {this.renderCount++}</button><span>Component</span> 
      </div>
    );
  }
}
