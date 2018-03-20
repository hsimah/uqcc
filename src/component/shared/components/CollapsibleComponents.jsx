import styled, { css } from 'styled-components';

export const Wrapper = styled.div``;
export const Header = styled.div``;
export const Content = styled.div``;

export const Collapsing = styled.div`
    max-height: 0px;
    overflow-y: scroll;
    transition: max-height .25s ease-in-out;

    ${props => !props.collapsed && css`
        max-height: 350px;
    `}
`;