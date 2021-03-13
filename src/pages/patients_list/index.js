import React, { useState, useEffect } from 'react';
import {
  Container,
  Main,
  Header,
  Back,
  BackText,
  Icons,
  AddProfile,
  Content,
  Card,
  Avatar,
  PatientImage,
  Info,
  Name,
  Format,
  Value,
  SearchBox,
  SearchButton,
  InputSearch,
  Button,
  Input,
} from './styles';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import colors from '../../styled/colors';
import { ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';

export default function PatientsList({ navigation }) {

  const [isPullingData, setIsPullingData] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const [patients, setPatients] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Função responsável por atualizar os dados quando o RefreshControl for acionado.
  function onRefresh() {
    setRefreshing(true);
    let unsubscribe = firestore().collection('patients').onSnapshot(querySnapshot => {
      const patients = [];
      querySnapshot.forEach(documentSnapshot => {
        patients.push({
          ...documentSnapshot.data(),
        })
      })
      setPatients(patients);
    })
    setTimeout(() => { unsubscribe() }, 2000)
    setRefreshing(false);
  }

  // Função de busca de dados no Firestore.
  useEffect(() => {
    setIsPullingData(true);
    firestore().collection('patients').get().then(querySnapshot => {
      const patients = [];
      querySnapshot.forEach(documentSnapshot => {
        patients.push({
          ...documentSnapshot.data(),
        })
      })
      setPatients(patients);
    })
    setTimeout(() => { setIsPullingData(false) }, 2000)
  }, [])

  const filterPatients = patients.filter(item => {
    var fullName = item.firstName + '' + item.lastName;
    return fullName.toLowerCase().includes(searchTerm.toLowerCase())
  })

  if (isPullingData) {
    return (
      <Main>
        <ActivityIndicator size="large" color={colors.green} />
      </Main>
    );
  }
  return (
    <Container>

      <Header>
        <Back onPress={() => navigation.goBack()}>
          <Icon1 name='chevron-back-outline' color={colors.gray} size={28} />
          <BackText>Voltar</BackText>
        </Back>

        <Icons>
          <AddProfile onPress={() => navigation.navigate('AddProfile')} >
            <Icon2 name='plus' size={28} color={colors.gray} />
          </AddProfile>
        </Icons>
      </Header>

      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <Content>
          {filterPatients.map((item, key) => {
            return (
              <Card key={key} onPress={() => navigation.navigate('Profile', { id: item.id, birthDate: item.birthDate, firstName: item.firstName, lastName: item.lastName, cpf: item.cpf, rg: item.rg, notes: item.notes })} >
                <Avatar>
                  <PatientImage source={require("../../../assets/img/default.jpg")} />
                </Avatar>
                <Info>
                  <Name>{item.firstName} {item.lastName}</Name>
                  <Value><Format>CPF: </Format>{item.cpf}</Value>
                </Info>
              </Card>
            )
          })}
        </Content>
      </ScrollView>

      <SearchBox>
        <Input>
          <Icon1 name='md-search-outline' size={28} color={colors.white} />
          <InputSearch
            placeholderTextColor='#fff'
            placeholder='Pesquise'
            maxLength={50}
            onChangeText={text => setSearchTerm(text)}
          />
        </Input>
        <SearchButton>
          <Icon1 name='send' size={28} color={colors.green} />
        </SearchButton>
      </SearchBox>

    </Container>
  );
}