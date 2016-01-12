import React    from "react";
import template from "./User.jsx";

class User extends React.Component {
  render() {
    return template.call(this);
  }
}

export default User;
