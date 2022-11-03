import React, { Component } from "react";

interface IUser {
  name: string;
  age: number;
}
interface IProps {
  userProps?: IUser;
}

interface IState {
  color: string;
}

// this.props.userProps

class ItemUserClass extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      color: "red",
    };
  }

  handleClickBlue = () => {
    this.setState({
      color: "blue",
    });
  };

  handleClickRed = () => {
    this.setState({
      color: "red",
    });
  };

  render() {
    return (
      <div className="w-50 m-auto text-center">
        <p style={{ color: this.state.color }}>{this.state.color}</p>
        <button
          disabled={this.state.color === "red"}
          onClick={this.handleClickRed}
        >
          Red
        </button>
        <button
          disabled={this.state.color === "blue"}
          onClick={this.handleClickBlue}
        >
          Blue
        </button>
      </div>
    );
  }
}

export default ItemUserClass;
