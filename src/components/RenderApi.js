import React, { Component } from "react";

export default class RenderApi extends Component {
  render() {
    return (
      <div className="App">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Todos.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>
                    {ele.address.street},{ele.address.suite} ,{ele.address.city}
                    :{ele.address.zipcode}
                  </td>
                  <td>{ele.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
