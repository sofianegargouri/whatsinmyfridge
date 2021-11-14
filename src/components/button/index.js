import React from 'react';
import {ButtonText, ButtonWrapper} from './styled-components';

export default ({onPress, children, backgroundColor}) => (
  <ButtonWrapper backgroundColor={backgroundColor} onPress={onPress}>
    <ButtonText>{children}</ButtonText>
  </ButtonWrapper>
);
