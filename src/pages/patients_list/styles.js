import styled from 'styled-components/native';
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

export const AddProfile = styled.TouchableOpacity``;

export const Icons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 35%;
  align-items: center;
`;

export const Content = styled.View`
  align-items: center;
`;

export const Card = styled.TouchableOpacity`
  width: 95%;
  background-color: ${colors.white};
  flex-direction: row;
  align-items: center;
  border-radius: 10px;
  padding: 3%;
  margin: 10px 0 0; 
  elevation: 5;
`;

export const PatientImage = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 100px;
`;

export const Avatar = styled.View`
  width: 35%;
  justify-content: center;
  align-items: center;
`;

export const Info = styled.View`
  padding: 3%;
  width: 65%;
`;

export const Name = styled.Text`
  font-size: ${metrics.medium};
  color: ${colors.black};
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Format = styled.Text`
  font-size: ${metrics.regular};
  color: ${colors.black};
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: ${metrics.regular};
  color: ${colors.gray};
`;

export const SearchBox = styled.View`
  flex-direction: row;
  background-color: ${colors.green};
  align-items: center;
  justify-content: space-between;
  padding: 4%;
`;

export const SearchButton = styled.View`
  background-color: ${colors.white};
  width: 50%;
  padding: 4%;
  border-radius: 50px;
  align-items: flex-start;
  margin-right: -30%;
`;

export const InputSearch = styled.TextInput`
  padding: 0 0 0 20px;
  font-size: ${metrics.big};
  color: #fff;
  width: 85%;
`;

export const Input = styled.View`
  flex-direction: row;
  align-items: center;
  width: 75%;
`;