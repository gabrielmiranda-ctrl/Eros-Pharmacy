import React, {useEffect, useState} from 'react'

import {
  Container,
  Header,
  Back,
  BackText,
  Newpatient,
  Profile,
  Notification,
  ViewInputs,
  CTextInput,
  FieldSet,
  Label,
  ModalTitle,
  ModalSubtitle,
  ModalView,
  Row,
  Buttons,
  ModalTitleSuccess,
  OkButtonSuccess,
  OkButtonText,
  OkButton,
} from './styles'
import colors from '../../styled/colors'
import {ScrollView, Modal} from 'react-native'
import firestore from '@react-native-firebase/firestore'

import RNModal from 'react-native-modal'

import Icon from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/MaterialIcons'

export default function CreateMedicine ({navigation}) {
  const [id, setID] = useState(null)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [classe, setClasse] = useState('')
  const [dosage, setDosage] = useState('')
  const [measure, setMeasure] = useState('')
  const [amount, setAmount] = useState('')

  const [modalVisible1, setModalVisible1] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)

  // Função que verifica se os campos foram preenchidos corretamente.
  function updateMedicine () {
    if (
      name === '' ||
      description === '' ||
      classe === '' ||
      dosage === '' ||
      amount === '' ||
      measure === ''
    ) {
      setModalVisible2(true)
    } else {
      // Criar ID do medicamento.
      var length = 20
      var id = ''
      var characters =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      var charactersLength = characters.length
      for (var i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * charactersLength))
      }

      firestore()
        .collection('medicine')
        .doc(id)
        .set({
          id: id,
          name: name,
          description: description,
          classe: classe,
          dosage: dosage,
          measure: measure,
          amount: amount,
          createdAt: new Date(),
        })
        

      setName('')
      setDescription('')
      setClasse('')
      setDosage('')
      setMeasure('')
      setAmount('')
      setModalVisible1(true)

    }
  }

  return (
    <Container>
      <Header>
        <Back onPress={() => navigation.goBack()}>
          <Icon name='chevron-back-outline' color={colors.gray} size={28} />
          <BackText>Voltar</BackText>
        </Back>
        <Profile></Profile>
        <Newpatient onPress={updateMedicine}>
          <Icon name='checkmark-outline' size={28} color={colors.gray} />
        </Newpatient>
        <Notification onPress={() => navigation.navigate('Home')}>
          <Icon name='close-outline' size={28} color={colors.gray} />
        </Notification>
      </Header>

      <RNModal
        isVisible={modalVisible1}
        animationIn='zoomIn'
        animationOut='zoomOut'>
        <ModalView>
          <Row>
            <Icon3
              name='check'
              color={colors.green}
              size={22}
              style={{paddingRight: 5}}
            />
            <ModalTitleSuccess>Boa!</ModalTitleSuccess>
          </Row>
          <ModalSubtitle>Medicamento cadastrado com sucesso!</ModalSubtitle>
          <Buttons>
            <OkButtonSuccess onPress={() => navigation.navigate('Home')}>
              <OkButtonText>Ok</OkButtonText>
            </OkButtonSuccess>
          </Buttons>
        </ModalView>
      </RNModal>

      <RNModal
        isVisible={modalVisible2}
        animationIn='zoomIn'
        animationOut='zoomOut'>
        <ModalView>
          <Row>
            <Icon3
              name='error-outline'
              color={colors.red}
              size={22}
              style={{paddingRight: 5}}
            />
            <ModalTitle>Ops!</ModalTitle>
          </Row>
          <ModalSubtitle>
            Erro ao cadastrar medicamento, tente novamente!
          </ModalSubtitle>
          <Buttons>
            <OkButton onPress={() => setModalVisible2(false)}>
              <OkButtonText>Ok</OkButtonText>
            </OkButton>
          </Buttons>
        </ModalView>
      </RNModal>
      <ScrollView>
        <ViewInputs>
          <CTextInput
            label='Nome'
            mode='outlined'
            autoCorrect={false}
            maxLength={20}
            autoCorrect={false}
            autoCorrect={false}
            onChangeText={name => setName(name)}
            theme={{colors: {primary: colors.green, text: colors.black}}}
          />

          <CTextInput
            label='Descrição'
            mode='outlined'
            autoCorrect={false}
            maxLength={20}
            autoCorrect={false}
            autoCorrect={false}
            maxLength={50}
            onChangeText={description => setDescription(description)}
            theme={{colors: {primary: colors.green, text: colors.black}}}
          />

          <CTextInput
            autoCorrect={false}
            label='Dosagem'
            mode='outlined'
            maxLength={20}
            autoCorrect={false}
            keyboardType='numeric'
            onChangeText={dosage => setDosage(dosage)}
            theme={{colors: {primary: colors.green, text: colors.black}}}
          />

          <CTextInput
            label='Medida'
            mode='outlined'
            autoCorrect={false}
            maxLength={20}
            autoCorrect={false}
            onChangeText={measure => setMeasure(measure)}
            theme={{colors: {primary: colors.green, text: colors.black}}}
          />

          <CTextInput
            label='Classe'
            mode='outlined'
            autoCorrect={false}
            maxLength={20}
            autoCorrect={false}
            onChangeText={classe => setClasse(classe)}
            theme={{colors: {primary: colors.green, text: colors.black}}}
          />

          <CTextInput
            label='Quantidade'
            mode='outlined'
            autoCorrect={false}
            maxLength={10}
            keyboardType='numeric'
            onChangeText={amount => setAmount(amount)}
            theme={{colors: {primary: colors.green, text: colors.black}}}
          />
        </ViewInputs>
      </ScrollView>
    </Container>
  )
}
