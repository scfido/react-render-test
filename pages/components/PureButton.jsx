import { PureComponent } from "react"
import style from "../index.css"

export default class MyButton extends PureComponent {

  constructor(props){
    super(props);
  }
 
  renderCount = 0;

  render() {
    console.log("Render pure button")

    const { text } = this.props.text;
    return (
      <div>
        <button className={style.button}>{text} {this.renderCount++}</button><span>PureComponent</span> 
      </div>
    );
  }
}
