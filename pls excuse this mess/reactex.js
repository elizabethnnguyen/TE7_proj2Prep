console.log("is it working");
var React = require('react');
var ReactDOM = require('react-dom');
var createReactClass = require('create-react-class');

var Switch = React.createReactClass({ displayName: "Switch",
  getInitialState: function () {
    return {
      time: 'night' };

  },
  handleClick: function () {
    if (this.state.time === 'night') {
      this.setState({ time: 'day' });
    } else {
      this.setState({ time: 'night' });
    }
  },
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { className: "Switch", "data-time": this.state.time }, /*#__PURE__*/
      React.createElement(Toggle, { onClick: this.handleClick, time: this.state.time })));


  } });


var Toggle = React.createReactClass({ displayName: "Toggle",
  render: function () {
    return /*#__PURE__*/(
      React.createElement("div", { onClick: this.props.onClick, "data-time": this.props.time, className: "Toggle" }, /*#__PURE__*/
      React.createElement(Button, null)));


  } });


var Button = React.createReactClass({ displayName: "Button",
  render: function () {
    return /*#__PURE__*/React.createElement("div", { className: "Button" });
  } });


ReactDOM.render( /*#__PURE__*/
React.createElement(Switch, null),
document.getElementById('switch'));
