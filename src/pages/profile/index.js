import React, {useState, useEffect} from 'react'
import {
  Container,
  Header,
  HeaderText,
  UserPhoto,
  Avatar,
  Back,
  BackText,
  Centralize,
  Edit,
  NameText,
  UserInfo,
  Title,
  Subtitle,
  Info,
  Content,
  BtnEdit,
  UserName,
  BtnControl,
  TextControl,
  Btn,
  BtnText,
  Affiliation,
  AffiliationText,
  AffiliationTitle,
  AffiliationImage,
} from './styles'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styled/colors'
import {ScrollView} from 'react-native'
import firestore from '@react-native-firebase/firestore'

export default function Profile ({navigation}) {
  const [age, setAge] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [medication, setMedication] = useState('')

  useEffect(() => {
    firestore()
      .collection('users')
      .doc('tD9cvXHdgbJMKhb1FqVd')
      .onSnapshot(documentSnapshot => {
        setAge(documentSnapshot.data().age)
        setFirstName(documentSnapshot.data().firstName)
        setLastName(documentSnapshot.data().lastName)
        setMedication(documentSnapshot.data().medication)
      })
  })

  var name = firstName + ' ' + lastName

  return (
    <Container>
      <ScrollView>
        <Content>
          <Header>
            <Back onPress={() => navigation.goBack()}>
              <Icon
                name='chevron-back-outline'
                size={30}
                color={colors.gray}
                size={30}
              />
              <BackText>Voltar</BackText>
            </Back>
          </Header>

          <UserPhoto>
            <Centralize>
              <Avatar
                source={require('../../../assets/img/messi_careca.jpg')}
              />
              <Edit>
                <Icon
                  name='ios-camera-outline'
                  size={22}
                  color={colors.white}
                  onPress={() => alert('Alterar Foto')}
                />
              </Edit>
            </Centralize>
          </UserPhoto>

          <UserName>
            <NameText>{name}</NameText>
          </UserName>

          <Info>
            <UserInfo>
              <TextControl>
                <Title>Idade</Title>
                <Subtitle>{age}</Subtitle>
              </TextControl>
            </UserInfo>
            <Btn>
              <BtnControl>
                <BtnEdit onPress={() => alert('Editar')}>
                  <BtnText>Editar</BtnText>
                </BtnEdit>
              </BtnControl>
            </Btn>
          </Info>

          <Info>
            <UserInfo>
              <TextControl>
                <Title>Nome</Title>
                <Subtitle>{firstName}</Subtitle>
              </TextControl>
            </UserInfo>
            <Btn>
              <BtnControl>
                <BtnEdit onPress={() => alert('Editar')}>
                  <BtnText>Editar</BtnText>
                </BtnEdit>
              </BtnControl>
            </Btn>
          </Info>

          <Info>
            <UserInfo>
              <TextControl>
                <Title>Sobrenome</Title>
                <Subtitle>{lastName}</Subtitle>
              </TextControl>
            </UserInfo>
            <Btn>
              <BtnControl>
                <BtnEdit onPress={() => alert('Editar')}>
                  <BtnText>Editar</BtnText>
                </BtnEdit>
              </BtnControl>
            </Btn>
          </Info>

          <Info>
            <UserInfo>
              <TextControl>
                <Title>Medicação</Title>
                <Subtitle>{medication}</Subtitle>
              </TextControl>
            </UserInfo>
            <Btn>
              <BtnControl>
                <BtnEdit onPress={() => alert('Editar')}>
                  <BtnText>Editar</BtnText>
                </BtnEdit>
              </BtnControl>
            </Btn>
          </Info>

          <Affiliation>
            <AffiliationTitle>Filiação</AffiliationTitle>

            <AffiliationText>Pai</AffiliationText>
            <AffiliationImage></AffiliationImage>

            <AffiliationText>Mãe</AffiliationText>
            <AffiliationImage></AffiliationImage>
          </Affiliation>
        </Content>
      </ScrollView>
    </Container>
  )
}
