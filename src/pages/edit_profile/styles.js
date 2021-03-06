import styled from 'styled-components/native';
import colors from '../../styled/colors';
import metrics from '../../styled/metrics';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  width: 85%;
  height: 60px;
  justify-content: center;
`;

export const Back = styled.TouchableOpacity`
  width: 55%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`;

export const BackText = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.regular};
`;

export const Content = styled.View`
  align-items: center;
`;

export const FieldSet = styled.View`
  width: 85%;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  border-color: ${colors.green};
  border-width: 1px;
`;

export const FieldSetPicker = styled.View`
  width: 85%;
  margin-top: 30px;
  margin-bottom: 20px;
  border-radius: 10px;
  border-color: ${colors.green};
  border-width: 1px;
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
`;

export const Legend = styled.Text`
  font-size: ${metrics.regular};
  color: ${colors.green};
  padding-left: 8px;
  padding-right: 8px;
  position: absolute;
  top: -23%;
  left: 10%;
  background-color: ${colors.white};
`;

export const LegendMultiline = styled.Text`
  font-size: ${metrics.regular};
  color: ${colors.green};
  padding-left: 8px;
  padding-right: 8px;
  position: absolute;
  top: -13%;
  left: 10%;
  background-color: ${colors.white};
`;

export const UpdateButton = styled.TouchableOpacity`
  height: 45px;
  background-color: ${colors.green};
  border-radius: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const UpdateButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.medium};
  padding-right: 8px;
`;

export const OptionText = styled.Text`
  font-size: ${metrics.regular};
  color: #000;
  font-weight: bold;
`;

export const Option = styled.View`
  width: 85%;
  margin-top: 30px;
  margin-bottom: 5px;
`;

export const ModalView = styled.View`
  background-color: ${colors.white};
  border-radius: 10px;
  padding: 4%;
`;

export const ModalTitle = styled.Text`
  color: ${colors.red};
  font-size: ${metrics.medium};
`;

export const ModalTitleSuccess = styled.Text`
  color: ${colors.green};
  font-size: ${metrics.medium};
`;

export const ModalSubtitle = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.regular};
  padding-top: 3%;
  padding-bottom: 13%;
`;

export const Buttons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const OkButton = styled.TouchableOpacity`
  background-color: ${colors.red};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const OkButtonSuccess = styled.TouchableOpacity`
  background-color: ${colors.green};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

export const OkButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${metrics.regular};
  padding-top: 2%;
  padding-bottom: 2%;
  padding-left: 4%;
  padding-right: 4%;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;










