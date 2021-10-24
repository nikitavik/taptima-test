import React, { FC } from 'react';
import profile from '/public/images/profile.png';
import { ButtonColors } from '../../../../../enums/styledComponents';
import Card from '../../../common/Card';
import TextButton from '../../../common/TextButton';
import { ProfileCards } from '../../../../../enums/profileCards';
import {
  ProfileCardFooter,
  ProfileCardSubtitle,
  ProfileCardTitle,
  ProfileImage,
  ProfileImageWrapper,
  ProfileTextWrapper,
  StyledProfileCard,
} from './styled';

const ProfileCard: FC = () => {
  return (
    <Card
      area={ProfileCards.profile}
      footer={
        <ProfileCardFooter>
          <TextButton color={ButtonColors.primary}>Upload picture</TextButton>
          <TextButton color={ButtonColors.secondary}>Remove picture</TextButton>
        </ProfileCardFooter>
      }
    >
      <StyledProfileCard>
        <ProfileTextWrapper>
          <ProfileCardTitle>Adrian Stefan</ProfileCardTitle>
          <ProfileCardSubtitle>
            Rm. Valcea, Romania <br />
            4:32PM (GMT-4)
          </ProfileCardSubtitle>
        </ProfileTextWrapper>
        <ProfileImageWrapper>
          <ProfileImage src={profile.src} alt="Profile image" />
        </ProfileImageWrapper>
      </StyledProfileCard>
    </Card>
  );
};

export default ProfileCard;
