import styled from 'styled-components/native';
import {BottomSheetTextInput} from '@gorhom/bottom-sheet';

export default styled(BottomSheetTextInput).attrs(({theme}) => ({
  placeholderTextColor: theme.colors.textInputPlaceholder,
}))`
  align-self: stretch;
  background-color: ${({theme}) => theme.colors.textInputBackground};
  border: 1px solid ${({theme}) => theme.colors.textInputBorder};
  border-radius: 12px;
  color: ${({theme}) => theme.colors.text};
  font-size: 16px;
  padding: 18px 16px;
`;
