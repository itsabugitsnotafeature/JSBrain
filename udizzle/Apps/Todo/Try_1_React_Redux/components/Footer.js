'use strict'

import React from 'React';
import FilterLink from '../containters/FilterLink'

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