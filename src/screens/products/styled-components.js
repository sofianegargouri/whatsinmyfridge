import BottomSheet from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

export const ProductsWrapper = styled.View`
  background-color: ${({theme}) => theme.colors.background};
  flex: 1;
`;

export const ProductsBottomSheet = styled(BottomSheet).attrs(({theme}) => ({
  backgroundStyle: {
    backgroundColor: theme.colors.background,
  },
  handleIndicatorStyle: {
    backgroundColor: theme.colors.textSecondary,
  },
}))`
  elevation: 3;
  padding-horizontal: 20px;
  shadow-color: #000;
  shadow-offset: { width: 0, height: 1px };
  shadow-opacity: 0.22;
  shadow-radius: 2.22px;
`;
