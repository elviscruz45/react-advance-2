import {css, keyframes} from 'styled-components'



const fadeKeyframes = keyframes`
from { filter: blur(5px);
     opacity: 0; }
to { filter: blur(0);
    opacity: 1; }`


const fadeIn = ({ time = "1s", type = "ease"} = {}) =>css`
animation: ${time} ${fadeKeyframes} ${type}`

export {fadeIn}