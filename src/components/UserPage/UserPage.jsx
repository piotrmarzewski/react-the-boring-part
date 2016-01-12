import "./UserPage.css";
import React from "react";
import User  from "app/components/User";

function template() {
  return (
    <div className="user-page">
      <User {...this.props.user} />
    </div>
  );
};

export default template;
