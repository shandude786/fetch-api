import React, { Component } from "react";

export default class FormRender extends Component {
  // componentDidMount() {
  //   // get all entities - GET
  //   fetch("https://reqres.in/api/users", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw Error(res.statusText);
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       // console.log("Data", data);
  //       this.setState({ items: data });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  render() {
    // console.log(this.props.data);
    return (
      <div>
        <h1>Here, The data </h1>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID:</th>
                <th>Name:</th>
                <th>Job:</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((ele, i) => {
                return (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{ele.name}</td>
                    <td>{ele.job}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
