import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './style';

function SubjectSummary(props) {
  const classes = useStyles();
  const {
    img, title, subtitle,
  } = props;

  return (
    <div>
      <img className={classes.summaryImg} src={img} alt={title} />
      <h1 className={classes.summaryTitle}>{title}</h1>
      <h2 className={classes.summarySubtitle}>{subtitle || ''}</h2>
    </div>
  );
}

SubjectSummary.defaultProps = {
  img: '',
  title: '',
  subtitle: '',
};

SubjectSummary.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default SubjectSummary;
