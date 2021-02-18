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
  padding: 20px 0;
  width: 70%;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`

export const BackText = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.medium};
`

export const HeaderText = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.medium};
`;

export const UserPhoto = styled.View`
  width: 85%;
  height: 190px;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 100px;
`;

export const Centralize = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Edit = styled.View`
  background-color: ${colors.black};
  width: 50px;
  height: 50px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  margin-left: -5%;
`;

export const NameText = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.bigger};
  text-align: center;
  justify-content: center;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  align-items: center;
`;

export const UserName = styled.View`
  align-items: center;
  width: 85%;
`;

export const Info = styled.View`
  width: 85%;
  flex-direction: row;
`;

export const UserInfo = styled.View`
  width: 70%;
  justify-content: center;
`;

export const Btn = styled.View`
  width: 30%;
  justify-content: center;
  align-items: flex-end;
`;

export const Title = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.regular};
`;

export const Subtitle = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.medium};
`;

export const BtnEdit = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const BtnText = styled.Text`
  color: ${colors.green};
  font-size: ${metrics.regular};
`;

export const BtnControl = styled.View`
  align-items: center;
  justify-content: center;
`;

export const TextControl = styled.View`
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const Affiliation = styled.View`
  width: 85%;
  height: 70px;
  margin-top: 30px;
  margin-bottom: 30px;
  align-items: center;
  flex-direction: row;
`;

export const AffiliationTitle = styled.Text`
  color: ${colors.black};
  font-size: ${metrics.medium};
  padding-right: 10%;
  font-weight: bold;
`;

export const AffiliationText = styled.Text`
  color: ${colors.gray};
  font-size: ${metrics.regular};
  padding-right: 3%;
`;

export const AffiliationImage = styled.View`
  background-color: ${colors.lightGray};
  width: 40px;
  height: 40px;
  border-radius: 100px;
  margin-right: 7%;
`;














