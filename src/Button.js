import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    );
  }
}
