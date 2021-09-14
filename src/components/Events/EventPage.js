import styled from "styled-components";
import {Upcoming, Past} from './Events';

const Container=styled.div`
    width: 100vw;
    min-height: 100vh;

    padding-top: 80px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    >div {
        margin: 60px 20px;
        margin-top: 80px;
    }
`;
const Title = styled.p`
    font-size: 40px;
    flex-basis: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function EventPage() {
    return(
        <Container>
        <Title>
            Upcoming Events
        </Title>
        {Upcoming}
        <Title>
            Past Events
        </Title>
        {Past}
        {Past}
        {Past}
        {Past}
        {Past}
        {Past}
        {Past}
        {Past}
        {Past}
        {Past}
        </Container>
    );
}

export default EventPage;
