import React, { FC, useState } from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import { MainContainer, MainContent } from './styled';

const MainLayout: FC = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const { children } = props;
  return (
    <MainContainer>
      <Header onToggleSidebar={handleToggleSidebar} />
      <Sidebar isOpen={showSidebar} onToggleSidebar={handleToggleSidebar} />
      <MainContent>{children}</MainContent>
    </MainContainer>
  );
};
export default MainLayout;
