import React from "react";

export class BugNotFound extends React.Component {
  render() {
    return <h2 ref={this.containerRef}>Bug "{this.props.id}" is not found</h2>;
  }
}
