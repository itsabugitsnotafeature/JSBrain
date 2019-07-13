'use strict'



function greatestCommonDiviso( a, b ) {
    if( b === 0) {
        return a;
    }
    return greatestCommonDiviso ( b , a % b );
}

greatestCommonDiviso( 30, 25 );
