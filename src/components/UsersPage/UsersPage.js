import React        from "react";
import template     from "./UsersPage.jsx";
import { getUsers } from "app/actionCreators/UserActionCreators";
import { connect }  from "react-redux";
import { Link }     from "react-router";

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  getUsers() {
    return this.props.users.map(user =>
      <li key={user.id}>
        <Link to={ `/users/${user.login}` }>{ user.login }</Link>
      </li>
    );
  }

  render() {
    return template.call(this);
  }
}

export default connect(state => state)(UsersPage);
