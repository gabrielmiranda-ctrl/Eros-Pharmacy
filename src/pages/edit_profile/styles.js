import styled from 'styled-components/native'
import colors from '../../styled/colors'
import metrics from '../../styled/metrics'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lightGray};
`

export const Header = styled.View`
  padding: 10px 8px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  justify-content: space-between;
`

export const Back = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`

export const BackText = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.regular};
`

export const Update = styled.TouchableOpacity``

export const Icons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 35%;
  align-items: center;
`

export const Content = styled.View`
  align-items: center;
  background-color: ${colors.white};
  margin: 8px;
  border-radius: 20px;
`

export const FieldSet = styled.View`
  width: 90%;
  margin: 30px 0 20px;
  border-radius: 2px;
  border-color: ${colors.green};
  border-width: 2px;
  border-radius: 8px;
`

export const Legend = styled.Text`
  font-size: ${metrics.small};
  color: ${colors.green};
  padding: 0 8px;
  position: absolute;
  top: -22%;
  left: 10%;
  background-color: ${colors.white};
`

export const LegendMultiline = styled.Text`
  font-size: ${metrics.small};
  color: ${colors.green};
  padding: 0 8px;
  position: absolute;
  top: -12%;
  left: 10%;
  background-color: ${colors.white};
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

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
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

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`
