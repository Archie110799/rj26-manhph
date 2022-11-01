import React, { Component } from 'react'

interface IUser {
  name: string;
  age: number;
}
interface IProps {
  userProps: IUser;
}

type State = {}

// this.props.userProps

class ItemUserClass extends Component<IProps, State> {
  state = {};

  render() {
    return <div>{this.props.userProps.name}</div>;
  }
}

export default ItemUserClass