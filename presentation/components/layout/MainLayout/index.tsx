import React, { FC, useState } from 'react';
import Head from 'next/head';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { MainContainer, MainContent } from './styled';

type PropsT = {
  title: string;
};

const MainLayout: FC<PropsT> = (props) => {
  const { children, title } = props;
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  return (
    <>
      <Head>
        <title>Devias Kit | {title}</title>
        <meta name="description" content="Devias Kit web site" />
        <meta name="keywords" content="devis, deviaskit, kit" />
      </Head>
      <MainContainer>
        <Header onToggleSidebar={handleToggleSidebar} />
        <Sidebar isOpen={showSidebar} onToggleSidebar={handleToggleSidebar} />
        <MainContent>{children}</MainContent>
      </MainContainer>
    </>
  );
};
export default MainLayout;
