import styled from 'styled-components/native'
import colors from '../../styled/colors'
import metrics from '../../styled/metrics'

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`

export const Header = styled.View`
  width: 85%;
  height: 60px;
  justify-content: center;
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

export const Flex = styled.View`
  align-items: center;
  flex-direction: row;
`

export const HeaderText = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.medium};
`

export const UserPhoto = styled.View`
  width: 85%;
  height: 190px;
  justify-content: center;
  align-items: center;
`

export const Avatar = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 100px;
`

export const Centralize = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Edit = styled.View`
  background-color: ${colors.black};
  width: 60px;
  height: 60px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-top: -120px;
  margin-left: 180px;
`

export const NameText = styled.Text`
  margin-top: 50px;
  color: ${colors.black};
  font-size: ${metrics.big};
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-bottom: 20px;
`

export const Content = styled.View`
  align-items: center;
`

export const UserName = styled.View`
  align-items: center;
  width: 85%;
`

export const Info = styled.View`
  width: 85%;
  justify-content: center;
`

export const Title = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.regular};
`

export const Subtitle = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.medium};
`

export const TextControl = styled.View`
  padding-bottom: 15px;
  padding-top: 15px;
`

export const Button = styled.View`
  flex-direction: row;
`
export const BtnEdit = styled.TouchableOpacity`
  background-color: ${colors.green};
  width: 50px;
  margin-right: 20px;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const BtnDelete = styled.TouchableOpacity`
  background-color: ${colors.red};
  width: 50px;
  height: 50px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const TextBtnDelete = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.medium};
  padding-right: 8px;
`

export const HeaderInfo = styled.View`
  width: 85%;
  flex-direction: row;
  align-items: center;
`

export const HeaderInfoText = styled.Text`
  color: ${colors.green};
  font-size: ${metrics.big};
  padding: 15px;
`

export const HeaderKinship = styled.View`
  width: 85%;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`

export const HeaderKinshipText = styled.Text`
  color: ${colors.green};
  font-size: ${metrics.big};
  padding: 15px;
`

export const Kinship1 = styled.View`
  width: 85%;
  border-radius: 10px;
  background-color: ${colors.lightGray};
  margin-top: 15px;
  margin-bottom: 15px;
  padding-bottom: 10px;
`

export const Kinship2 = styled.View`
  width: 85%;
  border-radius: 10px;
  background-color: ${colors.lightGray};
  margin-top: 15px;
  margin-bottom: 30px;
  padding-bottom: 10px;
`

export const KinshipLine = styled.View`
  flex-direction: row;
  align-items: center;
  padding-right: 18%;
`

export const KinshipTitle = styled.Text`
  color: #000000;
  font-size: ${metrics.medium};
  padding: 15px;
  font-weight: bold;
`

export const KinshipValue = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.regular};
  padding: 10px;
`
