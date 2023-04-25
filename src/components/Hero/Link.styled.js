import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)` 
    display: inline-block;
    padding: 10px 0;
    font-weight: 700;
    color: #EBD8FF;
    transform: scale(1);
    transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 400ms, transform cubic-bezier(0.075, 0.82, 0.165, 1) 400ms;

    &:hover {
        transform: scale(1.1);
    }

`;