import styled from 'styled-components/native'
import {View, TextInput} from 'react-native'
import colors from '../../styled/colors'
import metrics from '../../styled/metrics'

export const Container = styled.View`
  flex: 1;
`
export const InputSearch = styled.TextInput`
  margin: 0 0 0 20px;
  font-size: ${metrics.big};
  color: #fff;
`

export const CInput = styled.View`
  margin: 0 20px;
  align-items: center;

  flex-direction: row;
`

export const ButtonSend = styled.View`
  justify-content: center;
  padding-left: 25px;
  align-items: flex-start;
  background: ${colors.white};
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  width: 90px;
  height: 60px;
`

export const SearchBar = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 110px;
  padding-left: 30px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background: ${colors.green};
`

export const Header = styled.View`
  flex-direction: row;
`

export const Notification = styled.View``

export const Profile = styled.View``

export const ViewMedicine = styled.View`
  height: 100px;
  margin: 20px;
`

export const NameMedicine = styled.Text`
  font-size: ${metrics.big};
  padding: 10px;
  font-weight: bold;
  color: ${colors.black};
`

export const DescriptionMedicine = styled.Text`
  font-size: ${metrics.regular};
  padding: 0 0 5px 10px;
  color: ${colors.gray};
`

export const AmountMedicine = styled.Text`
  font-size: ${metrics.small};
  padding: 0 0 5px 10px;
  color: ${colors.green};
`
export const CScrollView = styled.ScrollView `
  margin-bottom: 130px;
`;