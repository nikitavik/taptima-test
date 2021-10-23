import React, {FC} from "react";
import MainLayout from "../../../presentation/components/layout/MainLayout";
import NavBar from "../../../presentation/components/page/settings/NavBar";
import styled from "styled-components";
import Card from "../../../presentation/components/common/Card";
import ProfileCard from "../../../presentation/components/page/settings/ProfileCard";
import BasicProfileCard from "../../../presentation/components/page/settings/BasicProfileCard";
import {mq} from "../../../constant/mediaqueries";

const PageLayout = styled.div`
  display: grid;
  grid-template-columns: 0 minmax(300px, 375px) minmax(300px, 375px);
  grid-gap: 1.5rem;
  grid-template-areas: 
    "navbar navbar navbar"
    ". profile basicProfile"
    ". profile notifications"
  ;
  ${mq.sm} {
    padding: 0 1.5rem;
    grid-template-columns: auto;
    grid-template-areas: 
    "navbar"
    "profile"
    "basicProfile"
    "notifications"
  ;
  }
`

const Profile: FC = () => {
    return (
        <MainLayout>
            <PageLayout>
                <NavBar />
                <ProfileCard />
                <BasicProfileCard />
                <Card area={"notifications"}>
                    Card3
                </Card>
            </PageLayout>
        </MainLayout>
    )
}

export default Profile
