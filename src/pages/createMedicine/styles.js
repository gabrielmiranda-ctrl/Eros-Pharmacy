import styled from 'styled-components/native'
import colors from '../../styled/colors'
import metrics from '../../styled/metrics'
import { TextInput } from 'react-native-paper';

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  padding: 0 20px;
  background: #fff;
  flex-direction: row;
  justify-content: flex-end;
`

export const Back = styled.TouchableOpacity`
  width: 55%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

export const BackText = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.regular};
`
export const Newpatient = styled.TouchableOpacity`
  align-items: flex-end;
  padding: 10px 0;
  width: 15%;
`

export const Notification = styled.View`
  align-items: flex-end;
  padding: 10px 0;
  width: 15%;
`

export const Profile = styled.View`
  align-items: flex-end;
  padding: 10px 0;
  width: 15%;
`

export const ModalView = styled.View`
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 4%;
`

export const ModalTitle = styled.Text`
  color: ${colors.red};
  font-size: ${metrics.medium};
`

export const ModalTitleSuccess = styled.Text`
  color: ${colors.green};
  font-size: ${metrics.medium};
`

export const ModalSubtitle = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.regular};
  padding: 3% 0 13%;
`

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`

export const OkButton = styled.TouchableOpacity`
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

export const OkButtonSuccess = styled.TouchableOpacity`
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`

export const OkButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.regular};
  padding: 2% 4%;
`

export const ViewInputs = styled.View`
  align-items: center;
  background-color: ${colors.white};
  margin: 8px;
  border-radius: 20px;
`

export const CTextInput = styled(TextInput)`
  margin-top: 30px;
  width: 90%;
`

export const FieldSet = styled.View`
  width: 90%;
  margin: 30px 0 20px;
  border-radius: 2px;
  border-color: ${colors.green};
  border-width: 2px;
  border-radius: 8px;
`

export const Label = styled.Text`
  font-size: ${metrics.small};
  color: ${colors.green};
  padding: 0 8px;
  position: absolute;
  top: -22%;
  left: 10%;
  background-color: ${colors.white};
`

export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CTouchableOpacity = styled.TouchableOpacity`
  background: ${colors.green};
  width: 45%;
  margin: 5%;
  border-radius: 5px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TextTouch = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.regular};
  text-align: center;
`

export const RTouchableOpacity = styled.TouchableOpacity`
  background: ${colors.red};
  width: 45%;
  margin: 5%;
  border-radius: 5px;
  height: 45px;

  display: flex;
  justify-content: center;
  align-items: center;
`
