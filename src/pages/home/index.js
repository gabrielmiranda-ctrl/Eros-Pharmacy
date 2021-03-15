import React, {useState, useEffect} from 'react'
import {Text, ActivityIndicator, RefreshControl, ScrollView} from 'react-native'
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
  Main,
  SeachBarRadius,
  MedicineScroll,
  SeachScrollView,
  ItemSeach,
  ItemText,
} from './styles'
import colors from '../../styled/colors'
import firestore from '@react-native-firebase/firestore'
import Icon from 'react-native-vector-icons/Ionicons'

export default function Home ({navigation}) {
  const [searchTerm, setSearchTerm] = useState('')
  const [refreshing, setRefreshing] = useState(false)
  const [medicine, setMedicine] = useState(['teste'])
  const [selectSeach, setSelectSeach] = useState('')

  function onRefreshClear () {
    setRefreshing(true)
    firestore()
      .collection('medicine')
      .get()
      .then(querySnapshot => {
        const medicine = []
        querySnapshot.forEach(documentSnapshot => {
          medicine.push({
            ...documentSnapshot.data(),
          })
        })
        setMedicine(medicine)
      })
    setRefreshing(false)
  }

  function onRefresh () {
    setRefreshing(true)
    firestore()
      .collection('medicine')
      .where('classe', '==', selectSeach)
      .get()
      .then(querySnapshot => {
        const medicine = []
        querySnapshot.forEach(documentSnapshot => {
          medicine.push({
            ...documentSnapshot.data(),
          })
        })
        setMedicine(medicine)
      })
    setRefreshing(false)
  }

  useEffect(() => {
    onRefresh()
  }, [selectSeach])

  if (medicine == 'teste') {
    return (
      <Main>
        <ActivityIndicator size='large' color={colors.green} />
      </Main>
    )
  }

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

      <MedicineScroll>
        <CScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefreshClear}
            />
          }>
          <SeachScrollView horizontal={true}>
            <ItemSeach onPress={() => setSelectSeach('Analgésico')}>
              <ItemText>Analgésicos</ItemText>
            </ItemSeach>
            <ItemSeach onPress={() => setSelectSeach('Antibióticos')}>
              <ItemText>Antibióticos</ItemText>
            </ItemSeach>
            <ItemSeach onPress={() => setSelectSeach('Anticoagulantes')}>
              <ItemText>Anticoagulantes</ItemText>
            </ItemSeach>
            <ItemSeach onPress={() => setSelectSeach('Antidepressivos')}>
              <ItemText>Antidepressivos</ItemText>
            </ItemSeach>
            <ItemSeach onPress={() => setSelectSeach('Anticancerosos')}>
              <ItemText>Anticancerosos</ItemText>
            </ItemSeach>
            <ItemSeach onPress={() => setSelectSeach('Antiepilépticos')}>
              <ItemText>Antiepilépticos</ItemText>
            </ItemSeach>
          </SeachScrollView>
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
                    <Text>quant: {item.amount}</Text>
                  </AmountMedicine>
                  <AmountMedicine>
                    <Text>
                      {item.dosage} {item.measure}
                    </Text>
                  </AmountMedicine>
                </TextMedicine>
              </ViewMedicine>
            )
          })}
        </CScrollView>
      </MedicineScroll>
      <SeachBarRadius></SeachBarRadius>
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
