import "./App.css";
import React from "react";

export default function () {
  return (
    <div className="app">
      { this.props.children }
    </div>
  );
};
