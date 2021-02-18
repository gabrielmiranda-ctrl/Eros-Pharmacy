import React, {useState, useEffect} from 'react'
import {
  Container,
  Header,
  UserPhoto,
  Avatar,
  Button,
  Centralize,
  Edit,
  NameText,
  Title,
  Subtitle,
  Info,
  Content,
  UserName,
  TextControl,
  BtnEdit,
  BtnDelete,
  HeaderInfo,
  Back,
  BackText,
  HeaderInfoText,
  HeaderKinship,
  HeaderKinshipText,
  Kinship1,
  Kinship2,
  KinshipTitle,
  KinshipLine,
  KinshipValue,
} from './styles'
import Icon1 from 'react-native-vector-icons/Ionicons'
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/Ionicons'
import colors from '../../styled/colors'
import {ScrollView, Alert} from 'react-native'
import firestore from '@react-native-firebase/firestore'

export default function Profile ({navigation}) {
  // Paciente
  const [birthDate, setBirthDate] = useState('')
  const [firstName, setFirstName] = useState('')
  const [image, setImage] = useState('')
  const [lastName, setLastName] = useState('')
  const [medication, setMedication] = useState('')
  const [notes, setNotes] = useState('')

  // Parente 1
  const [kinshipType1, setKinshipType1] = useState('')
  const [kinshipName1, setKinshipName1] = useState('')
  const [kinshipAddress1, setKinshipAddress1] = useState('')
  const [kinshipPhone1, setKinshipPhone1] = useState('')

  // Parente 2
  const [kinshipType2, setKinshipType2] = useState('')
  const [kinshipName2, setKinshipName2] = useState('')
  const [kinshipAddress2, setKinshipAddress2] = useState('')
  const [kinshipPhone2, setKinshipPhone2] = useState('')

  useEffect(() => {
    firestore()
      .collection('patients')
      .doc('teste')
      .get()
      .then(querySnapshot => {
        setBirthDate(querySnapshot.data().birthDate)
        setFirstName(querySnapshot.data().firstName)
        setImage(querySnapshot.data().image)
        setLastName(querySnapshot.data().lastName)
        setMedication(querySnapshot.data().medication)
        setNotes(querySnapshot.data().notes)
        setKinshipType1(querySnapshot.data().kinshipType1)
        setKinshipType2(querySnapshot.data().kinshipType2)
        setKinshipName1(querySnapshot.data().kinshipName1)
        setKinshipName2(querySnapshot.data().kinshipName2)
        setKinshipAddress1(querySnapshot.data().kinshipAddress1)
        setKinshipAddress2(querySnapshot.data().kinshipAddress2)
        setKinshipPhone1(querySnapshot.data().kinshipPhone1)
        setKinshipPhone2(querySnapshot.data().kinshipPhone2)
      })
  }, [])

  var name = firstName + ' ' + lastName

  function deleteAlert () {
    Alert.alert(
      'Excluir paciente',
      'Você deseja realmente excluir?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => userDelete(),
        },
      ],
      {cancelable: false},
    )

    const userDelete = () => {
      // Apagando dados do paciente no Firestore.
      firestore()
        .collection('patients')
        .doc('teste')
        .delete()
        .then(() => {
          // Apagando dados do paciente no Cloud Storage.
          // var id = 'teste';
          // var imageRef = storage().ref('/profile_images/' + id + '/avatar_image');
          // imageRef.delete().then(function () {
          //   console.log('Dados no Cloud Storage deletados com sucesso.');
          // }).catch(function (error) {
          //   console.log(error);
          // });

          Alert.alert('Sucesso!', 'O paciente foi excluído.', [
            {
              text: 'OK',
              onPress: () => navigation.navigate('Route'),
            },
          ])
        })
        .catch(error => {
          alert('Erro ao excluir paciente!')
          console.log(error)
        })
    }
  }

  return (
    <Container>
      <ScrollView>
        <Content>
          <Header>
            <Back onPress={() => navigation.goBack()}>
              <Icon name='chevron-back-outline' color={colors.gray} size={28} />
              <BackText>Voltar</BackText>
            </Back>
          </Header>

          <UserPhoto>
            <Centralize>
              <Avatar source={{uri: image !== '' ? image : undefined}} />

            </Centralize>
            <Edit>
                <Icon1
                  name='ios-camera-outline'
                  size={28}
                  color={colors.white}
                  onPress={() => alert('Alterar Foto')}
                />
              </Edit>
          </UserPhoto>

          <UserName>
            <NameText>{name}</NameText>
          </UserName>
          <Button>
            <BtnEdit onPress={() => alert('Editar')}>
              <Icon1 name='create-outline' size={28} color={colors.darkGreen} />
            </BtnEdit>

            <BtnDelete onPress={deleteAlert}>
              <Icon1 name='md-trash-bin' size={28} color={colors.darkRed} />
            </BtnDelete>
          </Button>
          <HeaderInfo>
            <Icon1 name='id-card-outline' size={24} color={colors.green} />
            <HeaderInfoText>Dados pessoais</HeaderInfoText>
          </HeaderInfo>

          <Info>
            <TextControl>
              <Title>Data de nascimento</Title>
              <Subtitle>{birthDate}</Subtitle>
            </TextControl>
          </Info>

          <Info>
            <TextControl>
              <Title>Nome</Title>
              <Subtitle>{firstName}</Subtitle>
            </TextControl>
          </Info>

          <Info>
            <TextControl>
              <Title>Sobrenome</Title>
              <Subtitle>{lastName}</Subtitle>
            </TextControl>
          </Info>

          <Info>
            <TextControl>
              <Title>Medicação</Title>
              <Subtitle>{medication}</Subtitle>
            </TextControl>
          </Info>

          <Info>
            <TextControl>
              <Title>Observações</Title>
              <Subtitle>{notes}</Subtitle>
            </TextControl>
          </Info>

          <HeaderKinship>
            <Icon2 name='users' size={24} color={colors.green} />
            <HeaderKinshipText>Filiação</HeaderKinshipText>
          </HeaderKinship>

          <Kinship1>
            <KinshipTitle>1ª Opção</KinshipTitle>

            <KinshipLine>
              <Icon2
                name='bookmark'
                size={24}
                color={colors.green}
                style={{paddingLeft: 15}}
              />
              <KinshipValue>{kinshipType1}</KinshipValue>
            </KinshipLine>

            <KinshipLine>
              <Icon2
                name='user'
                size={24}
                color={colors.green}
                style={{paddingLeft: 15}}
              />
              <KinshipValue>{kinshipName1}</KinshipValue>
            </KinshipLine>

            <KinshipLine>
              <Icon1
                name='home-outline'
                size={24}
                color={colors.green}
                style={{paddingLeft: 15}}
              />
              <KinshipValue>{kinshipAddress1}</KinshipValue>
            </KinshipLine>

            <KinshipLine>
              <Icon2
                name='phone'
                size={24}
                color={colors.green}
                style={{paddingLeft: 15}}
              />
              <KinshipValue>{kinshipPhone1}</KinshipValue>
            </KinshipLine>
          </Kinship1>

          <Kinship2>
            <KinshipTitle>2ª Opção</KinshipTitle>

            <KinshipLine>
              <Icon2
                name='bookmark'
                size={24}
                color={colors.green}
                style={{paddingLeft: 15}}
              />
              <KinshipValue>{kinshipType2}</KinshipValue>
            </KinshipLine>

            <KinshipLine>
              <Icon2
                name='user'
                size={24}
                color={colors.green}
                style={{paddingLeft: 15}}
              />
              <KinshipValue>{kinshipName2}</KinshipValue>
            </KinshipLine>

            <KinshipLine>
              <Icon1
                name='home-outline'
                size={24}
                color={colors.green}
                style={{paddingLeft: 15}}
              />
              <KinshipValue>{kinshipAddress2}</KinshipValue>
            </KinshipLine>

            <KinshipLine>
              <Icon2
                name='phone'
                size={24}
                color={colors.green}
                style={{paddingLeft: 15}}
              />
              <KinshipValue>{kinshipPhone2}</KinshipValue>
            </KinshipLine>
          </Kinship2>
        </Content>
      </ScrollView>
    </Container>
  )
}
