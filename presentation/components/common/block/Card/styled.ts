import styled from 'styled-components';

export const StyledCard = styled.div<{ area: string }>`
  border: ${(props) => props.theme.borders.light1pxBorder};
  box-shadow: ${(props) => props.theme.shadows.lightShadow};
  border-radius: 4px;
  background-color: #fff;
  grid-area: ${(props) => props.area};
`;
export const CardHeader = styled.div`
  border-bottom: ${(props) => props.theme.borders.gray1pxBorder};
`;
export const CardFooter = styled.div`
  border-top: ${(props) => props.theme.borders.gray1pxBorder};
`;
