import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import colors from '../../styled/colors';
import metrics from '../../styled/metrics';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.lightGray};
`;

export const Main = styled.View`
  flex: 1;
  background-color: ${colors.lightGray};
  align-items: center;
  justify-content: center;
`;

export const Header = styled.View`
  padding: 10px 8px;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.white};
  justify-content: space-between;
`;

export const Back = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const BackText = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.regular};
`;

export const Medicine = styled.TouchableOpacity``;

export const EditProfile = styled.TouchableOpacity``;

export const DeleteProfile = styled.TouchableOpacity``;

export const Icons = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 35%;
  align-items: center;
`;

export const UserAvatar = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 10%;
`;

export const Avatar = styled.Image`
  width: 130px;
  height: 130px;
  border-radius: 100px;
`;

export const Name = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.medium};
  font-weight: bold;
  padding: 0 10% 10%;
  text-align: center;
`;

export const UserName = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Edit = styled.TouchableOpacity`
  background-color: ${colors.black};
  width: 40px;
  height: 40px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-left: -8%;
`;

export const Content = styled.View`
  background-color: ${colors.white};
  margin: 8px;
  border-radius: 20px;
`;

export const Info = styled.View`
  width: 90%;
  justify-content: center;
  margin: 0 0 8% 5%;
`;

export const Title = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.regular};
`;

export const Subtitle = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.medium};
`;

export const ModalView = styled.View`
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 4%;
`;

export const ModalTitle = styled.Text`
  color: ${colors.yellow};
  font-size: ${metrics.medium};
`;

export const ModalSubtitle = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.regular};
  padding: 3% 0 13%;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const ModalButtonOk = styled.TouchableOpacity`
  background-color: ${colors.yellow};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-left: 4%;
`;

export const ModalButtonCancel = styled.TouchableOpacity`
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const ButtonTextOk = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.regular};
  padding: 2% 4%;
`;

export const ButtonTextCancel = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.regular};
  padding: 2% 4%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ModalButtonSuccess = styled.TouchableOpacity`
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-left: 4%;
`;

export const ModalTitleSuccess = styled.Text`
  color: ${colors.green};
  font-size: ${metrics.medium};
`;

export const ModalButtonError = styled.TouchableOpacity`
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-left: 4%;
`;

export const ModalTitleError = styled.Text`
  color: ${colors.red};
  font-size: ${metrics.medium};
`;

export const styles = StyleSheet.create({
  modalIcon: {
    paddingRight: 5
  },
});
