import React       from "react";
import template    from "./UserPage.jsx";
import { getUser } from "app/actionCreators/UserActionCreators";
import { connect } from "react-redux";

class UserPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(getUser(this.props.params.login));
  }

  render() {
    return template.call(this);
  }
}

export default connect(state => state)(UserPage);
