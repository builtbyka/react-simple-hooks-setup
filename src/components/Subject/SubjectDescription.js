import React from 'react';
import PropTypes from 'prop-types';

function SubjectDescription({ description }) {
  return (
    <article>
      <p style={{ marginTop: 0 }}>{description}</p>
    </article>
  );
}

SubjectDescription.defaultProps = {
  description: '',
};

SubjectDescription.propTypes = {
  description: PropTypes.string,
};

export default SubjectDescription;
