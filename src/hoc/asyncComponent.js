import React, { Component } from 'react';

const asyncComponent = (importComponent) => {
  return class extends Component {
    state = {
      component: null
    }
    // When this hoc is rendered execute the function passed into it.
    // The function passed in is an import which returns a default.
    // We assign that default component to state and then render it out in the render method.
    // This hoc asynchronously lazy loads any components whose import statements are passed into it.
    // Genius!
    componentDidMount() {
      importComponent()
        .then(cmp => {
          this.setState({component: cmp.default});
        });
    }

    render() {
      const C = this.state.component;

      return C ? <C {...this.props} /> : null;
    }
  }
}

export default asyncComponent;