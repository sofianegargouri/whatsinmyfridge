import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export const ProductCardWrapper = styled.TouchableOpacity`
  align-self: stretch;
  border-radius: 16px;
  background-color: ${({disabled, theme}) =>
    disabled ? theme.colors.backgroundDisabled : theme.colors.background};
  border: 1px solid ${props => props.theme.colors.border};
  flex-direction: column;
  margin: 0 20px 16px;
  padding: 16px 20px;
`;

export const ProductCardName = styled.Text`
  color: ${props => props.theme.colors.text};
  flex: 1;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const ProductCardNameQuantity = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 400;
`;

export const ProductCardButtonsGroup = styled.View`
  flex-direction: row;
`;

export const ProductCardQuantityButtons = styled.View`
  align-items: center;
  background: ${props => props.theme.colors.backgroundAlt};
  border-radius: 4px;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const ProductCardQuantityButton = styled.TouchableOpacity`
  align-items: center;
  height: 24px;
  justify-content: center;
  margin-left: 4px;
  width: 24px;
`;

export const ProductCardQuantityButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
`;

export const ProductCardQuantity = styled.View`
  align-items: center;
  background-color: white;
  border-radius: 12px;
  height: 32px;
  justify-content: center;
  margin-left: 4px;
  padding: 4px 8px;
  width: 40px;
`;

export const ProductCardQuantityText = styled.Text`
  color: ${props => props.theme.colors.textSecondary};
`;

export const ProductCardCartWrapper = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const ProductCardCartIcon = styled(Icon).attrs(({enabled, theme}) => ({
  size: 20,
  color: enabled ? theme.colors.pink : theme.colors.textSecondary,
}))``;

export const ProductCardCartText = styled.Text`
  color: ${({enabled, theme}) =>
    enabled ? theme.colors.pink : theme.colors.textSecondary};
  font-weight: 600;
  margin-left: 4px;
`;

export const ProductCardIcons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ProductCardIcon = styled(Icon).attrs(({theme}) => ({
  color: theme.colors.secondary,
  size: 16,
}))``;

export const ProductCardRow = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;
