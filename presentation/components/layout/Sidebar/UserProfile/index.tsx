import React, { FC } from 'react';
import user from '/public/images/user.png';
import { AvatarImage, AvatarWrapper, StyledUserProfile, UserName, UserRole } from './styled';
import Link from 'next/link';
import { NavBarTabs } from '../../../../../enums/routes';

const UserProfile: FC = () => {
  return (
    <Link href={NavBarTabs.profile}>
      <StyledUserProfile>
        <AvatarWrapper>
          <AvatarImage src={user.src} alt="User avatar" />
        </AvatarWrapper>
        <UserName>Roman Kutepov</UserName>
        <UserRole>Brain Director</UserRole>
      </StyledUserProfile>
    </Link>
  );
};

export default UserProfile;
