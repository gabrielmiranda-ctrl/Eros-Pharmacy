import React, {useState, useEffect} from 'react'
import {Button, View, Text, BackHandler} from 'react-native'
import {
  Container,
  SearchBar,
  InputSearch,
  CInput,
  ButtonSend,
  Header,
  Newpatient,
  Notification,
  Profile,
  ViewMedicine,
  ImgMedice,
  Img,
  TextMedicine,
  NameMedicine,
  DescriptionMedicine,
  AmountMedicine,
  CScrollView,
  Back,
  BackText,
  ClassMedicine,
  TextClass,
} from './styles'
import colors from '../../styled/colors'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Home ({navigation}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [medicine, setMedicine] = useState([])

  useEffect(() => {
    firestore()
      .collection('medicine')
      .onSnapshot(querySnapshot => {
        const medicine = []
        querySnapshot.forEach(documentSnapshot => {
          medicine.push({
            ...documentSnapshot.data(),
          })
        })
        setMedicine(medicine)
      })
  })

  const filterMedicine = medicine.filter(item => {
    return item.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <Container>
      <Header>
        <Back onPress={() => navigation.goBack()}>
          <Icon name='chevron-back-outline' color={colors.gray} size={28} />
          <BackText>Voltar</BackText>
        </Back>
        <Newpatient onPress={() => navigation.navigate('CreateMedicine')}>
          <Icon name='add-outline' size={28} color={colors.gray} />
        </Newpatient>
        <Notification>
          <Icon name='notifications-outline' size={28} color={colors.gray} />
        </Notification>
        <Profile>
          <Icon name='person-outline' size={28} color={colors.gray} />
        </Profile>
      </Header>

      <CScrollView>
        {filterMedicine.map((item, key) => {
          return (
            <ViewMedicine key={key}>
              <ClassMedicine>
                <TextClass>{item.classe}</TextClass>
              </ClassMedicine>
              <ImgMedice>
                <Img source={require('../../../assets/img/medicine.jpg')} />
              </ImgMedice>
              <TextMedicine>
                <NameMedicine>
                  <Text>{item.name}</Text>
                </NameMedicine>
                <DescriptionMedicine>
                  <Text>{item.description}</Text>
                </DescriptionMedicine>
                <AmountMedicine>
                  <Text>{item.amount}</Text>
                </AmountMedicine>
              </TextMedicine>
            </ViewMedicine>
          )
        })}
      </CScrollView>
      <SearchBar>
        <CInput>
          <Icon name='md-search-outline' size={28} color={colors.white} />
          <InputSearch
            type='text'
            placeholderTextColor='#fff'
            placeholder='Pesquise'
            onChangeText={text => setSearchTerm(text)}
          />
        </CInput>
        <ButtonSend>
          <Icon name='send' size={28} color={colors.green} />
        </ButtonSend>
      </SearchBar>
    </Container>
  )
}
