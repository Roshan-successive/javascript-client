import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Input, Err } from './style';

export const RadioField = (props) => {
  const {
    error, onChange, options, onBlur,

import { Input } from './style';

export default function RadioField(props) {
  const {
    error, onChange, options,

  } = props;
  return (
    <>
      { options && options.length && options.map(({ value, label }) => (
        <Fragment key={label}>

          <Input type="radio" name="sport" value={value} onChange={onChange} error={error} onBlur={onBlur} />
          { label }
          <br />
        </Fragment>
      ))}
      <Err>{error}</Err>
    </>
  );

          <Input type="radio" name="sport" value={value} onChange={onChange} error={error} />
          { label}
          <br />
        </Fragment>
      ))}
    </>
  );
}

RadioField.propTypes = {
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object),

  onBlur: PropTypes.string.isRequired,

};
RadioField.defaultProps = {
  error: '',
  options: [],

};

};

