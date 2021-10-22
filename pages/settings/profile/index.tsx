import React, {FC} from "react";
import MainLayout from "../../../presentation/components/layout/MainLayout";
import NavBar from "../../../presentation/components/page/settings/NavBar";
import styled from "styled-components";

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 0 auto;
  grid-gap: 1.5em;
  grid-template-areas: 
    "navbar navbar navbar"
    ". card1 card2"
    ". card1 card3"
  ;
`

const Profile: FC = () => {
    return (
        <MainLayout>
            <PageLayout>
                <NavBar />
                <div style={{width: "250px", height: "250px", background: "red", gridArea: "card1"}}>card1</div>
                <div style={{width: "500px", height: "250px", background: "red", gridArea: "card2"}}>Card2</div>
                <div style={{width: "500px", height: "250px", background: "red", gridArea: "card3"}}   >Card3</div>
            </PageLayout>
        </MainLayout>
    )
}

export default Profile
