import styled from "styled-components";

export default styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props => props.theme.bg};

    width: 100vw;
    height: 100vh;

    scroll-snap-align: start;
`;