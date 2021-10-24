import React, { FC } from 'react';
import profile from '/public/images/profile.png';
import { ButtonColors } from '../../../../../enums/styledComponents';
import Card from '../../../common/block/Card';
import TextButton from '../../../common/control/TextButton';
import {
  ProfileCardFooter,
  ProfileCardSubtitle,
  ProfileCardTitle,
  ProfileImage,
  ProfileImageWrapper,
  ProfileTextWrapper,
  StyledProfileCard,
} from './styled';
import { CardAreas } from '../../../../../enums/cardAreas';

const ProfileCard: FC = () => {
  return (
    <Card
      area={CardAreas.profile}
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
