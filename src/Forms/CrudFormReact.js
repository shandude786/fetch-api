import React, { Component } from "react";
import "../App.css";

export default class CrudFormReact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      job: "",
      act: 0,
      index: "",
      datas: [],
    };
    this.textInput = React.createRef();
    this.formInput = React.createRef();
  }

  componentDidMount() {
    this.textInput.current.focus();
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.state.name;
    let job = this.state.job;
    if (this.state.act === 0) {
      //new data
      let data = { name, job };
      datas.push(data);
    } else {
      //update data
      let index = this.state.index;
      datas[index].name = name;
      datas[index].job = job;
    }
    this.setState({ datas: datas, act: 0 });
    this.textInput.current.focus();
  };

  handleRemove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({ datas: datas });
  };

  handleEdit = (i) => {
    let data = this.state.datas[i];
    this.textInput.current.value = data.name;
    this.formInput.current.value = data.job;
    this.setState({ act: 1, index: i });
    this.textInput.current.focus();
  };
  render() {
    let datas = this.state.datas;
    return (
      <React.Fragment>
        <h1>React Form</h1>
        <form
          onSubmit={this.handleSubmit}
          className="form-div"
          autoComplete="off"
        >
          Name:
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            ref={this.textInput}
          />
          <br />
          <br />
          Job:
          <input
            type="text"
            name="job"
            value={this.state.job}
            onChange={this.handleChange}
            ref={this.formInput}
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
        <div>
          {datas.map((ele, i) => (
            <li key={i}>
              {i + 1}, {ele.name},{ele.job}
              <button onClick={() => this.handleRemove(i)}>Remove</button>
              <button onClick={() => this.handleEdit(i)}>Edit</button>
            </li>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
