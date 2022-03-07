import React from 'react';
import { connect } from 'react-redux';

export const deneme = () => {
  return <div>deneme</div>;
};

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(deneme);
