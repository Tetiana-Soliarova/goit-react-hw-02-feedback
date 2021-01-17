import React from 'react';
import PropTypes from 'prop-types';

const TitleFeetback = ({title}) => {
    return (
        <h1>{title}</h1>  
        
    );
};

TitleFeetback.propTypes = {
    title: PropTypes.string,
};

export default TitleFeetback;