import styled from 'styled-components/native'
import colors from '../../styled/colors'
import metrics from '../../styled/metrics'

export const Container = styled.View`
  flex: 1;
  width: 90%;
  padding: 10px;
  height: 50%;
  margin: 5px 8px;
  background-color: ${colors.white};
`
export const CTextInput = styled.TextInput`
  border-width: 1px;
  border-radius: 5px;
  border-color: ${colors.gray};

  background: ${colors.lightGray};
  color: ${colors.black};
`

export const Label = styled.View``

export const TextLabel = styled.Text`
  text-align: left;
  font-size: ${metrics.regular};
  color: ${colors.gray};
`
export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

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
`;