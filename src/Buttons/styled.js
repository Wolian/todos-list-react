import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    background: transparent;
    color: ${({ theme }) => theme.color.teal};
    border: none;
    margin: 0 0 0 20px;
    transition: filter 0.3s;
    border-bottom: 1px solid transparent;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(140%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
    }
`;