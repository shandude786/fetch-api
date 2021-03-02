import React, { Component } from "react";
import "../App.css";
import FormRender from "./FormRender";

export default class GIForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      job: "",
      items: [],
      showName: false,
      data:[],
    };
    this.textInput = React.createRef();
  }
  componentDidMount() {
    this.textInput.current.focus();
    

  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let items = [...this.state.items];
    let a=[{"name":"shan","job":"dev"}];
    console.log(a);
    items.push({
      name: this.state.name,
      job: this.state.job,
    },...a);
    

    this.setState({
      items,
      name: "",
      job: "",
      showName: true,
    });
    console.log(items);

    // creates entity
    // fetch("https://reqres.in/api/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name: this.state.name, job: this.state.job }),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw Error(res.statusText);
    //     }
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log("Data", data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    this.textInput.current.focus();
  };
  render() {
    // console.log(this.state.items);
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
          />
          <br />
          <br />
          <button>Submit</button>
        </form>
        <div>
          {/* {this.state.showName && (
            <p>
              "Name:
              {this.state.items.map((ele) => {
                console.log(ele);
              })}
            </p>
          )} */}
        </div>
        {this.state.showName && <FormRender data={this.state.items} />}
        {/* {this.state.showName && <Table Data={this.state} />} */}
      </React.Fragment>
    );
  }
}
