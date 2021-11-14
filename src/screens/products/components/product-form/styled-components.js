import {BottomSheetView} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

export const ProductFormWrapper = styled(BottomSheetView)`
  flex-direction: column;
  padding: 20px;
`;

export const ProductFormSwitchContainer = styled.View`
  align-items: center;
  flex-direction: row;
  margin-top: 12px;
`;

export const ProductFormSwitchLabel = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 16px;
  margin-left: 8px;
`;

export const ProductFormButtonWrapper = styled.View`
  margin-top: 12px;
`;
