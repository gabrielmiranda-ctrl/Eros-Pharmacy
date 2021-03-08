import React, {useState} from 'react'
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
  TextLabel,
  CTouchableOpacity,
  RTouchableOpacity,
  TextTouch,
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
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [classe, setClasse] = useState('')
  const [dosage, setDosage] = useState('')
  const [measure, setMeasure] = useState('')
  const [amount, setAmount] = useState('')

  const [modalVisible1, setModalVisible1] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)

  async function updateMedicine () {
    firestore()
      .collection('medicine')
      .add({
        name: name,
        description: description,
        classe: classe,
        dosage: dosage,
        measure: measure,
        amount: amount,
      })
      .then(() => {
        setModalVisible1(true)
      })
      .catch(error => {
        setModalVisible2(true)
        console.log(error)
      })

    navigation.navigate('Home')
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
            <OkButtonSuccess onPress={() => setModalVisible1(false)}>
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
          <FieldSet>
            <Label>Nome</Label>
            <CTextInput
              autoCorrect={false}
              onChangeText={name => setName(name)}
            />
          </FieldSet>

          <FieldSet>
            <Label>Descrição</Label>
            <CTextInput
              autoCorrect={false}
              maxLength={50}
              onChangeText={description => setDescription(description)}
            />
          </FieldSet>

          <FieldSet>
            <Label>Dosagem</Label>
            <CTextInput
              autoCorrect={false}
              onChangeText={dosage => setDosage(dosage)}
            />
          </FieldSet>

          <FieldSet>
            <Label>Medida</Label>
            <CTextInput
              autoCorrect={false}
              onChangeText={measure => setMeasure(measure)}
            />
          </FieldSet>

          <FieldSet>
            <Label>Classe</Label>
            <CTextInput
              autoCorrect={false}
              onChangeText={classe => setClasse(classe)}
            />
          </FieldSet>

          <FieldSet>
            <Label>Quantidade</Label>
            <CTextInput
              autoCorrect={false}
              onChangeText={amount => setAmount(amount)}
            />
          </FieldSet>
        </ViewInputs>
      </ScrollView>
    </Container>
  )
}
