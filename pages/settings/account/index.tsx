import React, { FC } from 'react';
import MainLayout from '../../../presentation/components/layout/MainLayout';
import NavBar from '../../../presentation/components/page/settings/NavBar';

const Account: FC = () => {
  return (
    <MainLayout title="Account">
      <NavBar />
      Account Page
    </MainLayout>
  );
};

export default Account;
