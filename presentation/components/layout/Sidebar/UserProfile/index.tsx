import React, { FC } from 'react';
import Link from 'next/link';
import user from '/public/images/user.png';
import user2x from '/public/images/user2x.png';
import { NavBarRoutes } from '../../../../../enums/routes';
import { AvatarImage, AvatarWrapper, StyledUserProfile, UserName, UserRole } from './styled';

const UserProfile: FC = () => {
  return (
    <Link href={NavBarRoutes.profile} passHref>
      <StyledUserProfile>
        <AvatarWrapper>
          <AvatarImage src={user.src} alt="User avatar" srcSet={`${user2x.src} 2x`} />
        </AvatarWrapper>
        <UserName>Roman Kutepov</UserName>
        <UserRole>Brain Director</UserRole>
      </StyledUserProfile>
    </Link>
  );
};

export default UserProfile;
