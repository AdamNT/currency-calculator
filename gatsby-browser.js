const React = require('react');
const App = require('./src/containers/App/App').default;

// Wraps every page in a component
exports.wrapPageElement = ({ element }) => {
  return <App>{element}</App>;
};
