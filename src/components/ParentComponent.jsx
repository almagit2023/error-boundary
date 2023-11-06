import React from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends React.Component {
  handleClick = () => {
    console.log("Click event handled by ParentComponent");
  };

  render() {
    return (
      <div onClick={this.handleClick}>
        <ChildComponent />
      </div>
    );
  }
}

export default ParentComponent