import React from "react";
class ExerciseType extends React.Component {
    constructor() {
      super();
      this.state = {value: 'push-up'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('You Selected : ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
             Select the day of the week :
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="skaters">Skaters</option>
              <option value="push-up">Push-up</option>
              <option value="jump-rope">Jump Rope</option>
              <option value="bent-knee-push-up">Bent Knee Push-up</option>
              <option value="downward-facing-dog">Downward-facing Dog</option>
              <option value="bent-knee-sit-up-crunches">Bent-Knee Sit-up / Crunches</option>
              <option value="push-up-with-single-leg-raise">Push-up With Single-leg Raise</option>
              <option value="front-plank">Front Plank</option>
              <option value="squats">Squats</option>
              <option value="standing-overhead-dumbbell-presses">Standing overhead dumbbell presses</option>
              <option value="dumbbell-rows">Dumbbell rows</option>
              <option value="single-leg-deadlifts">Single-leg deadlifts</option>
              <option value="burpees">Burpees</option>
              <option value="side-planks">Side planks</option>
              <option value="situps">Situps</option>
              <option value="glute-bridge">Glute bridge</option>
              <option value="running">Running</option>
              <option value="cycling">Cycling</option>
              <option value="Swimming">Swimming</option>
              <option value="power-walking">Power Walking</option>
              <option value="boxing">Boxing</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default ExerciseType;