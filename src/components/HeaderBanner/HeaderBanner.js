import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import HeaderBannerFeatured from './HeaderBannerFeatured';
import HeaderBannerTitle from './HeaderBannerTitle';

import useStyles from './style';


function MainTitleBanner(props) {
  const { feature } = props;

  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <HeaderBannerTitle />
        </Grid>
        <Grid item xs={8}>
          <HeaderBannerFeatured feature={feature} />
        </Grid>
      </Grid>
    </header>
  );
}

MainTitleBanner.defaultProps = {
  feature: {},
};

MainTitleBanner.propTypes = {
  feature: PropTypes.instanceOf(Object),
};

export default MainTitleBanner;
