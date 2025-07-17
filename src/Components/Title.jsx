import React from 'react';
import PropTypes from 'prop-types';

const alignmentMap = {
  center: 'text-center items-center',
  left: 'text-left items-start',
  right: 'text-right items-end',
};

const Title = ({ title, subtitle, alignment = 'center', className = '' }) => {
  const alignClasses = alignmentMap[alignment] || alignmentMap.center;

  return (
    <div className={`flex flex-col ${alignClasses} mb-10 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 tracking-tight">
        {title}
      </h2>
      <p className="mt-2 text-gray-500 text-sm md:text-base font-light tracking-wide">
        {subtitle}
      </p>
      <div className="mt-4 w-12 h-1 bg-amber-500 rounded-full" />
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  alignment: PropTypes.oneOf(['center', 'left', 'right']),
  className: PropTypes.string,
};

export default Title;
