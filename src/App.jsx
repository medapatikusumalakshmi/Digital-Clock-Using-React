
import React from "react";
class  App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleTimeString(),
      };
    }
    componentDidMount() {
      this.timerID = setInterval(()=>this.tick(), 1000);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }
    render() {
      return (
        <div id="maindiv">
            <img src="https://w7.pngwing.com/pngs/986/866/png-transparent-mickey-mouse-minnie-mouse-epic-mickey-comics-cartoon-heroes-cartoon-animated-cartoon.png" alt="tim1" id="img1" />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmRNM51JLyvrhzNO7CJ5QsXDee76j2nLkZWZaw7M6bBtdKEyk07BQw3TioedtQcn5HNh4&usqp=CAU" alt="img2" id="img2"/>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsLqE2i5ZHJWlUvAu3YTnLbqDiowx0yEYKMw&s" alt="img3" id="img3"/>
            <img src="https://w7.pngwing.com/pngs/742/550/png-transparent-minnie-mouse-mickey-mouse-drawing-cartoon-character-minnie-mouse-hand-fictional-character-flower.png" alt="img4" id="img4"/>
            <div id="con">Digital Clock</div>
          <button id="subdiv">{this.state.time}</button>
        </div>
      );
    }
  }
  export default  App
