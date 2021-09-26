import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #3f50b5;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem, calc((100vw - 1000px)/2);
    z-index: 10;
`
export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    font-weight: bold;
    font-size: 30px;
    align-items: center;
    text-decoration: none;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;
    &.active{
        color: #000
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
     @media screen and (max-width: 768px){
         display: none;
     }
`