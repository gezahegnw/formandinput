import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";

import "./App.css";
import Form from "./Form";
import Table from "./Table";
import ExerciseLog from "./ExerciseLog"

//injectTapEventPlugin();
const formBody = {
  backgroundColor: '#ccc',

}

class App extends Component {
  state = {
    data: [],
    editIdx: -1
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App" style={formBody}>
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />
          <Table
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            data={this.state.data}
            header={[
              {
              name: "Day",
              prop: "dayOfTheWeek"
              },
              {
                name: "Diastolic",
                prop: "diastolic"
              },
              {
                name: "Systolic",
                prop: "systolic"
              },
              {
                prop: "pulserate",
                name: "Pulserate"
              },
              {
                name: "Weight",
                prop: "weight"
              },
            ]}
          />
        </div>
      </MuiThemeProvider>
      
    );
  }
}

export default App;
