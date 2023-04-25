import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Link = styled(NavLink)` 
    display: inline-block;
    margin-right: 15px;
    margin: 10px;
    padding: 10px;
    font-weight: 700;
    color: #5736A3;
    transform: scale(1);
    transition: color cubic-bezier(0.075, 0.82, 0.165, 1) 400ms, transform cubic-bezier(0.075, 0.82, 0.165, 1) 400ms;

    &:hover {
        transform: scale(1.1);
    }

`;