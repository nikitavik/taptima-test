import React, { FC } from 'react';
import MainLayout from '../../../presentation/components/layout/MainLayout';
import NavBar from '../../../presentation/components/page/settings/NavBar';
import ProfileCard from '../../../presentation/components/page/settings/ProfileCard';
import BasicProfileCard from '../../../presentation/components/page/settings/BasicProfileCard';
import { PageLayout } from './styled';

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
