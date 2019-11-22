import React from "react";
class Searchbar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  OnformSubmit = event => {
    event.preventDefault();
    this.props.OnformSubmit(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.OnformSubmit} className="form-group">
        <label htmlFor="text"> Video Search</label>
        <input
          className="form-control"
          type="text"
          id="text"
          onChange={this.onInputChange}
          value={this.state.term}
        ></input>
      </form>
    );
  }
}
export default Searchbar;
