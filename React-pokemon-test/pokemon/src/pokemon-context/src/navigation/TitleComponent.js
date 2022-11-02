import React from 'react'
import Helmet from 'react-helmet'

const TitleComponent = (props) => {
    var defaultTitle = '*app';
    return (
        <Helmet>
            <title>{props.title ? props.title : defaultTitle}</title>
        </Helmet>
    )
}


export  default TitleComponent;