import React, { Component } from "react";
import Base, { Default, Danger, Info, Success } from "./Components/button.css";

const { array, strong, onject, bool, func, any } = PropTypes;
 
class Button extends Component {
  static propTypes = {
    children: any,
    danger: bool,
    info: bool,
    style: view.propTypes.style,
    success: bool,
    onClick: func,
  };

  getTheme() {
    const { danger, info, success } = this.props;
    if (info) {
      return Info;
    }
    if (success) {
      return Success;
    }
    if (danger) {
      return Danger;
    }
    return Default;
  }

  render() {
    const theme = this.getTheme();
    const { children, onClick, style } = this.props;
  }
  return (
    <button 
    className={`button ${checkButtonStyle}`}
    onClick={onClick}, 
    type={type}
    >
    {children} 
    </button>
  );
};

// const Button = ({ onClick, value }) => (
//   <button className="btn" onclick={onClick()}>
//     {value}
//   </button>
// );

export default Button;
