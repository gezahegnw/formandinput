import React from "react";
class SelectOptons extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: 'Monday'};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Your favorite flavor is: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
          Select the day of the week            
          <select value={this.state.value} onChange={this.handleChange}>
              <option value="monday">Monday</option>
              <option value="tuesday">Tuesday</option>
              <option value="wednesday">Wednesday</option>
              <option value="thursday">Thursday</option>
              <option value="friday">Friday</option>
              <option value="saturday.">Saturday.</option>
              <option value="sunday">Sunday</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  export default SelectOptons;