import React, { Component } from "react";
import RenderApi from "./RenderApi";
export default class FetchApi extends Component {
  state = {
    item: [
      {
        id: 11,
        name: "Shanti Lal",
        username: "Shandude",
        email: "Shanti@agmail.com",
        address: {
          street: "New Street",
          suite: "Apt. 556",
          city: "Pindwara",
          zipcode: "307022",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "shandude.org",
        company: {
          name: "GKM It ",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
      {
        id: 12,
        name: "Mukesh",
        username: "Shandude",
        email: "Shanti@agmail.com",
        address: {
          street: "New Street",
          suite: "Apt. 556",
          city: "Pindwara",
          zipcode: "307022",
          geo: {
            lat: "-37.3159",
            lng: "81.1496",
          },
        },
        phone: "1-770-736-8031 x56442",
        website: "shandude.org",
        company: {
          name: "GKM It ",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets",
        },
      },
    ],
    todos: [],
    itemList: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const data = await res.json();
      console.log("Data", data[0]);

      let item = this.state.item;
      console.log(item);
      let itemList = this.state.itemList;
      console.log(itemList);
      itemList.push(...item, ...data);

      this.setState({ itemList: itemList });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    return <RenderApi Todos={this.state.itemList} />;
  }
}
