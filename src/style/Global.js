import { createGlobalStyle } from 'styled-components';
import {styThem} from './varble'

const GlobalStyle = createGlobalStyle`

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}



body {
    box-sizing: border-box;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    line-height: 1.7;
    color: ${styThem.color.greyDark};
}

::selection {
    background-color: ${styThem.primary.main};
    color: ${styThem.color.white};
}

/* width */
::-webkit-scrollBar {
    width: 10px;
}
  
/* Track */
::-webkit-scrollBar-track {
    box-shadow: inset 0 0 5px ${styThem.color.greyDark3}; 
    background: ${styThem.color.greyDark2}; 
}

/* Handle */
::-webkit-scrollBar-thumb {
    background-image:  linear-gradient(
        to right bottom,
        rgba( 168, 60, 60 , 0.8),
        rgba( 211, 123, 123, 0.8)
    );
    border-radius: 3px;
    transition: all .2s ease-out;
}
  
/* Handle on hover */
::-webkit-scrollBar-thumb:hover {
    background:${styThem.primary.main}; 
}
`;

export default GlobalStyle;