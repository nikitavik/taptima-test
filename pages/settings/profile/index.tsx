import React, { FC } from 'react';
import MainLayout from '../../../presentation/components/layout/MainLayout';
import ProfileCard from '../../../presentation/components/page/profile/ProfileCard';
import NavBar from '../../../presentation/components/page/settings/NavBar';
import BasicProfileCard from '../../../presentation/components/page/profile/BasicProfileCard';
import { PageLayout } from '../../../presentation/components/page/profile/styled';

const Profile: FC = () => {
  return (
    <MainLayout>
      <NavBar />
      <PageLayout>
        <ProfileCard />
        <BasicProfileCard />
      </PageLayout>
    </MainLayout>
  );
};

export default Profile;
