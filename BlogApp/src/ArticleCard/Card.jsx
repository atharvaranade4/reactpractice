import React from "react";
import PropTypes from 'prop-types';
import CardImage from "./CardImage";
import CardBody from "./CardBody"
import CardDetails from "./CardDetails"

function Card () {
    return (
        <>
            <div className=''>
                <CardImage/>                
            </div>
            <div>
                <CardBody/>
                <CardDetails/>
            </div>
        </>
    );
}

export default Card