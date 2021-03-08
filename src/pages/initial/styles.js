import styled from 'styled-components/native'
import {View, TextInput} from 'react-native'
import colors from '../../styled/colors'
import metrics from '../../styled/metrics'
import {Children} from 'react'

export const Container = styled.View`
  background: ${colors.white};
  flex: 1;
`
export const ImgBackGround = styled.Image`
  position: absolute;
  top: 50;
  left: -70%;
  width: 130%;
  height: 70%;
  opacity: 0.2;
`

export const Title = styled.Text`
  font-size: 70px;
  color: ${colors.green};
  position: absolute;
  padding: 20px;
  top: 100px;
  left: 0;
  font-weight: bold;
`
export const Description = styled.Text`
  font-size: 35px;
  color: ${colors.gray};
  font-weight: bold;
  position: absolute;
  padding: 20px;
  text-align: left;
  line-height: 50px;
  width: 60%;
  top: 300px;
  left: 0;
`

export const ButtonContainer = styled.View`
  padding: 5% 10%;
  flex: 1;
  flex-direction: column-reverse;
`

export const ButtonNext = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.green};
`

export const ButtonText = styled.Text`
  color: ${colors.white};
  text-align: center;
  font-size: ${metrics.big};
  font-weight: bold;
`
