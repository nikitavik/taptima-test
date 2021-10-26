import React, { FC } from 'react';
import MainLayout from '../../../presentation/components/layout/MainLayout';
import ProfileCard from '../../../presentation/components/page/profile/ProfileCard';
import NavBar from '../../../presentation/components/page/settings/NavBar';
import BasicProfileCard from '../../../presentation/components/page/profile/BasicProfileCard';
import NotificationsCard from '../../../presentation/components/page/profile/NotificationsCard';
import { PageLayout } from '../../../presentation/components/page/profile/styled';

const Profile: FC = () => {
  return (
    <MainLayout title="Profile">
      <NavBar />
      <PageLayout>
        <ProfileCard />
        <BasicProfileCard />
        <NotificationsCard />
      </PageLayout>
    </MainLayout>
  );
};

export default Profile;
