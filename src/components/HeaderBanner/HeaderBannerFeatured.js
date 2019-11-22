import React from 'react';
import PropTypes from 'prop-types';
import { A } from 'hookrouter';

import useStyles from './style';

function HeaderBannerFeatured({ feature }) {
  const classes = useStyles();

  return feature.featured ? 
     (
      <A href={`/view/${feature.featured.id}`}>
        <div className={classes.featuredImg}>
        <header className={classes.featuredHeader}>
          <h1 className={classes.featuredTitle}>{feature.featured.title}</h1>
          <h2 className={classes.featuredSubtitle}>Watch Now</h2>
        </header>
        </div>
      </A>
    ) : 
  null;
}

HeaderBannerFeatured.defaultProps = {
  feature: {},
};

HeaderBannerFeatured.propTypes = {
  feature: PropTypes.instanceOf(Object),
};


export default HeaderBannerFeatured;
