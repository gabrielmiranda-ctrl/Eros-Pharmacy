import styled from 'styled-components/native'
import {View, TextInput} from 'react-native'
import colors from '../../styled/colors'
import metrics from '../../styled/metrics'

export const Container = styled.View`
  flex: 1;
`

export const ViewModal = styled.View`
  background: ${colors.white};
  width: 70%;
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
export const Main = styled.View`
  flex: 1;
  background-color: ${colors.lightGray};
  align-items: center;
  justify-content: center;
`
/* Select Seach Item Classe */
export const SeachScrollView = styled.ScrollView`
  z-index: 9999999999;
  display: flex;
  padding: 10px 0;
`;

export const ItemSeach = styled.TouchableOpacity`
  margin: 10px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${colors.green};
  height: 30px;
  padding: 10px;
  border-radius: 8px;
`;

export const ItemText = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.small};
`;

/* Result Seach Itens */
export const CScrollView = styled.ScrollView``

export const MedicineScroll = styled.View`
  padding: 5px 0 25px 0;
  background: #ebf2fa;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  margin-bottom: 135px !important;
`

export const ViewMedicine = styled.TouchableOpacity`
  flex-direction: row;
  background: #fff;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  margin: 5px;
  border-bottom-width: 1px;
  padding: 20px;
  border-bottom-color: rgba(142, 153, 175, 0.2);
`
export const ImgMedice = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Img = styled.Image`
  width: 120px;
  border-radius: 5px;
  border-width: 1px;
  border-color: rgba(142, 153, 175, 0.2);
  height: 120px;
`

export const TextMedicine = styled.View`
  display: flex;
  justify-content: center;
  width: 70%;
  padding: 25px 20px 10px 20px;
`
export const ClassMedicine = styled.View`
  position: absolute;
  right: 0;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  padding: 10px 0 10px 20px;
  width: 170px;
  background: ${colors.green};
`
export const TextClass = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.small};
`
export const NameMedicine = styled.Text`
  font-size: ${metrics.big};
  font-weight: bold;
  padding: 0 0 10px 0;
  color: ${colors.black};
`

export const DescriptionMedicine = styled.Text`
  font-size: ${metrics.regular};
  text-align: justify;
  padding: 0 0 2px 0;
  color: ${colors.gray};
`

export const AmountMedicine = styled.Text`
  font-size: ${metrics.small};
  padding: 0 0 5px 0;
  color: ${colors.green};
`
/* Search Bar */
export const SeachBarRadius = styled.View`
  position: absolute;
  z-index: 99999;
  left: 0;
  right: 0;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  bottom: 80px;
  height: 50px;
  padding-top: 40px;
  padding-left: 30px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background: ${colors.lightGray};
`

export const SearchBar = styled.View`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 120px;
  padding-top: 40px;
  padding-left: 30px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background: ${colors.green};
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
  background: ${colors.white};
  border-bottom-left-radius: 50px;
  border-top-left-radius: 50px;
  width: 80px;
  height: 50px;
`
