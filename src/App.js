import React, { Component } from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {changeLabelAction} from "./flux/action/app.js"
class App extends Component {

  handleClick() {
    const {changeLabel} = this.props;
    changeLabel();
  } 

  render() {
    const {testLabel} = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <Button
            color="secondary"
            variant="raised"
            onClick = {this.handleClick.bind(this)}
          >
            {testLabel}
          </Button>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const {app} = state;
  const {testLabel} = app;
  return {
    testLabel
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeLabel: ()=> {
      dispatch(changeLabelAction());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
