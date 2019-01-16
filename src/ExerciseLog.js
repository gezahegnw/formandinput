import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
const formInput = {
  width: '50%',
}
class ExerciseLog extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      exerciseDay: "",
      exerciseType: "",
      duration: ""
    }
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
   // const err = this.validate();
   // if (!err) {
      this.props.onSubmit(this.state);
      // clear form
      this.setState({
        exerciseDay: "",
        exerciseType: "",
        duration: ""
      });
    }

  render() {
    return (
      <div>
      <form  style={formInput}>
        <TextField
          name="exerciseDay"
          hintText="Enter exercise Day"
          floatingLabelText="Exercise Day"
          value={this.state.exerciseDay}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="exerciseType"
          hintText="Enter exerciseType"
          floatingLabelText="Exercise Type"
          value={this.state.exerciseType}
          onChange={e => this.change(e)}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="duration"
          hintText="Enter how long your workout"
          floatingLabelText="Duration"
          value={this.state.duration}
          onChange={e => this.change(e)}
          type="duration"
          floatingLabelFixed
        />    
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
      </div>
    );
  }
}
export default ExerciseLog;