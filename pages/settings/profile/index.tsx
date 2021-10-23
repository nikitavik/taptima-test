import React, {FC} from "react";
import MainLayout from "../../../presentation/components/layout/MainLayout";
import NavBar from "../../../presentation/components/page/settings/NavBar";
import Card from "../../../presentation/components/common/Card";
import ProfileCard from "../../../presentation/components/page/settings/ProfileCard";
import BasicProfileCard from "../../../presentation/components/page/settings/BasicProfileCard";
import { PageLayout } from "./styled";


const Profile: FC = () => {
    return (
        <MainLayout>
            <NavBar />
            <PageLayout>
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
