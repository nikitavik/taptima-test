import React, { FC } from 'react';
import MainLayout from '../../../presentation/components/layout/MainLayout';
import NavBar from '../../../presentation/components/page/settings/NavBar';

const PricePlans: FC = () => {
  return (
    <MainLayout title="Price Plans">
      <NavBar />
      Price Plans Page
    </MainLayout>
  );
};

export default PricePlans;
