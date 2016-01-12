import "./UsersPage.css";
import React from "react";

function template() {
  return (
    <div className="users-page">
      <ul>{ this.getUsers() }</ul>
    </div>
  );
};

export default template;
