import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Tabs, Tab } from '@material-ui/core';

const Footer = ({ muscles }) => {
  return (
    <Paper>
      <Tabs value={0} indicatorColor="primary" textColor="primary" centered>
        <Tab label="All" />
        {muscles.map(group => {
          return <Tab key={group} label={group} />;
        })}
      </Tabs>
    </Paper>
  );
};

Footer.propTypes = {
  muscles: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Footer;
