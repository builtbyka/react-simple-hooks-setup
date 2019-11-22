import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import SubjectSummary from './subjectSummary';
import SubjectDescription from './subjectDescription';
import { IMG_PATH } from '../../utils/paths';

import useStyles from './style';

function subjectDetail(props) {
  const {
    subject,
  } = props;
  const classes = useStyles();
  return (
    <header className={classes.detailRoot}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <SubjectSummary
            key={subject.id}
            title={subject.title}
            img={image}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          <SubjectDescription description={subject.description} />
        </Grid>
      </Grid>
    </header>
  );
}

SubjectDetail.defaultProps = {
  subject: {},
};

subjectDetail.propTypes = {
  subject: PropTypes.instanceOf(Object),
};

export default subjectDetail;
