import {BottomSheetTextInput} from '@gorhom/bottom-sheet';
import styled from 'styled-components/native';

export const NewProductTextInput = styled(BottomSheetTextInput).attrs({
  placeholderTextColor: '#92939B',
})`
  align-self: stretch;
  background-color: #252836;
  border-radius: 15px;
  font-size: 16px;
  margin-horizontal: 20px;
  padding: 16px 20px;
`;
