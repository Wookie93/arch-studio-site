require('./src/assets/styles/_global.scss');
const React = require('react');
const { MainTemplate } = require('./src/templates/MainTemplates');

exports.wrapPageElement = ({ element, props }) => {
  return <MainTemplate {...props}>{element}</MainTemplate>;
};
