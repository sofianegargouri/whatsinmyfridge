import styled from 'styled-components/native';

export const ButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  align-self: stretch;
  background-color: ${({backgroundColor, theme}) =>
    theme.colors[backgroundColor || 'primary']};
  border-radius: 12px;
  justify-content: center;
  padding: 16px 20px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-weight: 600;
  font-size: 16px;
  text-align: center;
`;
