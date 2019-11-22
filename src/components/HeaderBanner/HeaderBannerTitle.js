import React from 'react';
import PropTypes from 'prop-types';
import { A } from 'hookrouter';

import useStyles from './style';

function HeaderBannerTitle() {
  const classes = useStyles();

  return (
    <A href="/">
        <h1 className={`${classes.title}`}>
          Title
        </h1>
        <h2 className={classes.subtitle}>Subtitle</h2>
    </A>
  );
}

export default HeaderBannerTitle;
