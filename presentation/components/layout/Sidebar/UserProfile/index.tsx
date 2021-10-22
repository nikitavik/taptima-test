import React, {FC} from 'react';
import user from "/public/images/user.png"
import {AvatarImage, AvatarWrapper, StyledUserProfile, UserName, UserRole } from './styled';

const UserProfile: FC = () => {
    return (
        <StyledUserProfile>
            <AvatarWrapper>
                <AvatarImage src={user.src} alt="User avatar"/>
            </AvatarWrapper>
            <UserName>Roman Kutepov</UserName>
            <UserRole>Brain Director</UserRole>
        </StyledUserProfile>
    );
};

export default UserProfile;