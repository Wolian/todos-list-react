import styled from "styled-components";

export const StyledForm = styled.form`
    display:grid;
    grid-template-columns: 1fr auto;
    grid-gap:20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Button = styled.button`
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.teal};
    padding: 10px;
    border: none;
    transition: 0.3s;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(140%);
    }
`;