import React from 'react'
import {Button, View, Text} from 'react-native'
import colors from '../../styled/colors'
import Icon from 'react-native-vector-icons/Ionicons'

import {
  Container,
  ImgBackGround,
  Title,
  Description,
  ButtonNext,
  ButtonContainer,
  ButtonText,
} from './styles'

export default function Initial ({navigation}) {
  return (
    <Container>
      <ImgBackGround
        source={require('../../../assets/img/logoGrayScale.png')}
      />
      <Title>Eros Pharmacy</Title>
      <Description>Uma verdadeira experiência farmacêutica</Description>
      <ButtonContainer>
        <ButtonNext onPress={() => navigation.navigate('Route')}>
          <ButtonText>Entrar</ButtonText>
        </ButtonNext>
      </ButtonContainer>
    </Container>
  )
}
