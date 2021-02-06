import React, {useState} from 'react'
import {Button, View, Text} from 'react-native'
import {
  Container,
  SearchBar,
  InputSearch,
  CInput,
  ButtonSend,
  Header,
  Notification,
  Profile,
  ViewMedicine,
  NameMedicine,
  DescriptionMedicine,
  AmountMedicine,
  CScrollView,
} from './styles'
import colors from '../../styled/colors'

import Icon from 'react-native-vector-icons/Ionicons'

export default function Home ({navigation}) {
  const [medicine, setMedicine] = useState([
    {
      name: 'Dipirona',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'Paracetaloca',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'WhatsZepam',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'Risotril',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'Dipirona',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'Paracetaloca',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'WhatsZepam',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'Risotril',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'Dipirona',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'Paracetaloca',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'WhatsZepam',
      description: 'remédinho show de bola',
      amount: 35,
    },
    {
      name: 'Risotril',
      description: 'remédinho show de bola',
      amount: 35,
    },
  ])
  return (
    <Container>
      <Header>
        <Notification>
          <Icon name='notifications-outline' size={30} color={colors.gray} />
        </Notification>
        <Profile>
          <Icon name='person-circle-outline' size={30} color={colors.gray} />
        </Profile>
      </Header>

      <NameMedicine>
        <Text>Remédios: {medicine.length}</Text>
      </NameMedicine>

      <CScrollView>
        {medicine.map((val, key) => {
          return (
            <ViewMedicine key={key}>
              <NameMedicine>
                <Text>{val.name}</Text>
              </NameMedicine>
              <DescriptionMedicine>
                <Text>{val.description}</Text>
              </DescriptionMedicine>
              <AmountMedicine>
                <Text>quant. {val.amount}</Text>
              </AmountMedicine>
            </ViewMedicine>
          )
        })}
      </CScrollView>

      <SearchBar>
        <CInput>
          <Icon name='md-search-outline' size={30} color={colors.white} />
          <InputSearch
            type='text'
            placeholderTextColor='#fff'
            placeholder='Pesquise'
          />
        </CInput>
        <ButtonSend>
          <Icon name='send' size={30} color={colors.green} />
        </ButtonSend>
      </SearchBar>
    </Container>
  )
}
