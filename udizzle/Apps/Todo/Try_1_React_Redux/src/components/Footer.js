'use strict'

import React from 'react';
import FilterLink from '../containers/FilterLink'

const Footer = () => {
    <p>
        Show:
        {'   '}
        <FilterLink filter='SHOW_ALL'>
            ALL
        </FilterLink>

        <FilterLink filter='SHOW_COMPLETED'>
        COMPLETED
        </FilterLink>

        <FilterLink filter='SHOW_COMPLETED'>
            COMPLETED
        </FilterLink>
    </p>
}

export default Footer;