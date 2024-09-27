import { styled } from '@mui/material';
import { ReactNode } from 'react';

export interface MainContainerProps {
  children: ReactNode;
}

export const MainContainer = ({ children }: MainContainerProps) => (
  <MainContainer.Wrapper>
    <MainContainer.Container>{children}</MainContainer.Container>
  </MainContainer.Wrapper>
);

MainContainer.Container = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  max-width: 80rem;
  width: 100%;
`;

MainContainer.Wrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};
`;
