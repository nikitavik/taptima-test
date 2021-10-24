import React, { FC } from 'react';
import profile from '/public/images/profile.png';
import { ButtonColors } from '../../../../../enums/styledComponents';
import { CardAreas } from '../../../../../enums/cardAreas';
import Card from '../../../common/block/Card';
import TextButton from '../../../common/control/TextButton';
import {
  Footer,
  CardSubtitle,
  CardTitle,
  Image,
  ImageWrapper,
  TextWrapper,
  StyledProfileCard,
} from './styled';

const ProfileCard: FC = () => {
  return (
    <Card
      area={CardAreas.profile}
      footer={
        <Footer>
          <TextButton color={ButtonColors.primary}>Upload picture</TextButton>
          <TextButton color={ButtonColors.secondary}>Remove picture</TextButton>
        </Footer>
      }
    >
      <StyledProfileCard>
        <TextWrapper>
          <CardTitle>Adrian Stefan</CardTitle>
          <CardSubtitle>
            Rm. Valcea, Romania <br />
            4:32PM (GMT-4)
          </CardSubtitle>
        </TextWrapper>
        <ImageWrapper>
          <Image src={profile.src} alt="Profile image" />
        </ImageWrapper>
      </StyledProfileCard>
    </Card>
  );
};

export default ProfileCard;
