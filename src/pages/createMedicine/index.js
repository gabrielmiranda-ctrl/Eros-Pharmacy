import React, {useState} from 'react'
import {
  Container,
  CTextInput,
  Label,
  TextLabel,
  Buttons,
  CTouchableOpacity,
  RTouchableOpacity,
  TextTouch,
} from './styles'
import {ScrollView, Modal} from 'react-native'
import firestore from '@react-native-firebase/firestore'

export default function CreateMedicine ({navigation}) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [classe, setClasse] = useState('')
  const [amount, setAmount] = useState('')

  async function updateMedicine () {
    firestore()
      .collection('medicine')
      .add({
        name: name,
        description: description,
        classe: classe,
        amount: amount,
      })
      .then(() => {
        alert('Medicamento cadastrado com sucesso!')
      })
      .catch(error => {
        alert('Erro ao cadastrar medicamento, tente novamente!')
      })

    navigation.navigate('Home')
  }
  return (
      <Container>
        <Label>
          <TextLabel>Nome</TextLabel>
        </Label>
        <CTextInput
          autoCorrect={false}
          value={name}
          onChangeText={name => setName(name)}
        />
        <Label>
          <TextLabel>Descrição</TextLabel>
        </Label>
        <CTextInput
          autoCorrect={false}
          value={description}
          onChangeText={description => setDescription(description)}
        />
        <Label>
          <TextLabel>Classe</TextLabel>
        </Label>
        <CTextInput
          autoCorrect={false}
          value={classe}
          onChangeText={classe => setClasse(classe)}
        />
        <Label>
          <TextLabel>Quantidade</TextLabel>
        </Label>
        <CTextInput
          autoCorrect={false}
          value={amount}
          onChangeText={amount => setAmount(amount)}
        />
        <Buttons>
          <CTouchableOpacity onPress={updateMedicine}>
            <TextTouch>Cadastrar</TextTouch>
          </CTouchableOpacity>
          <RTouchableOpacity onPress={() => navigation.navigate('Home')}>
            <TextTouch>Cancelar</TextTouch>
          </RTouchableOpacity>
        </Buttons>
      </Container>
  )
}
