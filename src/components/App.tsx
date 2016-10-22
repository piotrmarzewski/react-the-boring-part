import * as React from "react";
const cls:any = require("./App.css");

class App extends React.Component<null, { text: string }> {
  state = {
    text: "Hello World!",
  };

  render() {
    return (
      <div>
        <h1 className={cls.title}>{this.state.text}</h1>
      </div>
    );
  }
}

export default App;
