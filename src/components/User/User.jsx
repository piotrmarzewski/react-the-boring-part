import "./User.css";
import React from "react";

function template() {
  return (
    <div className="user">
      {
        !this.props.loading ?
          <div>
            <h1>{ this.props.name } <small>aka { this.props.login }</small></h1>
            <img src={ this.props.avatar_url } alt={ this.props.login } />
          </div>
        : null
      }
    </div>
  );
};

export default template;
