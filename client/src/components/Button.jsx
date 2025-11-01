import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', size = 'md', disabled = false, className = '', onClick, ...rest }) => {
  const classes = [
    `btn-${variant}`,
    `btn-${size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'}`,
    disabled ? 'btn-disabled' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  const handleClick = (e) => {
    if (disabled) return;
    if (onClick) onClick(e);
  };

  return (
    <button className={classes} disabled={disabled} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
