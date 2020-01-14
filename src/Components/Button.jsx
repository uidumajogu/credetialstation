import React, { Component } from "react";

export class Button extends Component {
  buttonStyle = {
    display: "flex",
    alignItems: "center",
    backgroundColor: this.props.backgroundColor
      ? this.props.backgroundColor
      : "transparent",
    width: this.props.width,
    height: this.props.height,
    color: this.props.color,
    fontSize: this.props.fontSize,
    fontWeight: this.props.fontWeight,
    border: this.props.border ? this.props.border : "none",
    borderRadius: this.props.borderRadius,
    margin: this.props.margin,
    padding: this.props.padding ? this.props.padding : "0",
    justifyContent: this.props.justifyContent
      ? this.props.justifyContent
      : "center"
  };

  buttonImageStyle = {
    objectFit: this.props.objectFit ? this.props.objectFit : "cover",
    borderRadius: this.props.imageBorderRadius
      ? this.props.imageBorderRadius
      : "0"
  };

  buttonClicked = label => {
    this.props.onClick(label);
  };

  render() {
    return (
      <button
        style={this.buttonStyle}
        onClick={() => this.buttonClicked(this.props.buttonLabel)}
      >
        <div style={{ paddingRight: this.props.suffixIconPadding }}>
          {this.props.suffixIconEmoji ? (
            this.props.suffixIcon
          ) : (
            <img
              style={this.buttonImageStyle}
              width={this.props.suffixIconWidth}
              height={
                this.props.suffixIconHeight
                  ? this.props.suffixIconHeight
                  : this.props.suffixIconWidth
              }
              src={this.props.suffixIcon}
            ></img>
          )}
        </div>
        {this.props.buttonLabel ? this.props.buttonLabel : "No Label"}
      </button>
    );
  }
}

export default Button;
