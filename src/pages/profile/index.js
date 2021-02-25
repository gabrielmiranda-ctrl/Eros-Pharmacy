<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from 'react';
import {
  Container,
  Header,
  UserPhoto,
  Avatar,
  Button,
  Centralize,
  Edit,
  NameText,
>>>>>>> Pedro
  Title,
  Subtitle,
  Info,
  Content,
<<<<<<< HEAD
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

=======
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
  ModalTitle,
  ModalSubtitle,
  ModalView,
  Buttons,
  ModalButtonOk,
  ModalButtonCancel,
  ButtonTextOk,
  ButtonTextCancel,
  Row,
  ModalTitleSuccess,
  ModalButtonSuccess,
  ModalTitleError,
  ModalButtonError
} from './styles';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styled/colors';
import { ScrollView } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNModal from 'react-native-modal';

export default function Profile({ navigation }) {

  const [birthDate, setBirthDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [image, setImage] = useState('');
  const [lastName, setLastName] = useState('');
  const [medication, setMedication] = useState('');
  const [notes, setNotes] = useState('');
  const [kinshipType1, setKinshipType1] = useState('');
  const [kinshipName1, setKinshipName1] = useState('');
  const [kinshipAddress1, setKinshipAddress1] = useState('');
  const [kinshipPhone1, setKinshipPhone1] = useState('');
  const [kinshipType2, setKinshipType2] = useState('');
  const [kinshipName2, setKinshipName2] = useState('');
  const [kinshipAddress2, setKinshipAddress2] = useState('');
  const [kinshipPhone2, setKinshipPhone2] = useState('');

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  useEffect(() => {
    firestore()
      .collection('patients')
      .doc('teste')
      .get()
      .then(documentSnapshot => {
        setBirthDate(documentSnapshot.data().birthDate)
        setFirstName(documentSnapshot.data().firstName)
        setImage(documentSnapshot.data().image)
        setLastName(documentSnapshot.data().lastName)
        setMedication(documentSnapshot.data().medication)
        setNotes(documentSnapshot.data().notes)
        setKinshipType1(documentSnapshot.data().kinshipType1)
        setKinshipType2(documentSnapshot.data().kinshipType2)
        setKinshipName1(documentSnapshot.data().kinshipName1)
        setKinshipName2(documentSnapshot.data().kinshipName2)
        setKinshipAddress1(documentSnapshot.data().kinshipAddress1)
        setKinshipAddress2(documentSnapshot.data().kinshipAddress2)
        setKinshipPhone1(documentSnapshot.data().kinshipPhone1)
        setKinshipPhone2(documentSnapshot.data().kinshipPhone2)
      })
  }, [])

  var name = firstName + ' ' + lastName;

  function deleteAlert() {
    setModalVisible1(true);
  }

  function userDelete() {
    setModalVisible1(false);
    firestore()
      .collection('patients')
      .doc('teste')
      .delete()
      .then(() => {
        setModalVisible2(true);
      }).catch((error) => {
        setModalVisible3(true);
        console.log(error);
      });
  }

>>>>>>> Pedro
  return (
    <Container>
      <ScrollView>
        <Content>
          <Header>
            <Back onPress={() => navigation.goBack()}>
<<<<<<< HEAD
              <Icon
                name='chevron-back-outline'
                size={30}
                color={colors.gray}
                size={30}
              />
              <BackText>Voltar</BackText>
=======
              <Icon1 name='chevron-back-outline' color={colors.gray} size={28} />
              <BackText>Ficha do paciente</BackText>
>>>>>>> Pedro
            </Back>
          </Header>

          <UserPhoto>
            <Centralize>
<<<<<<< HEAD
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
=======
              <Avatar source={{ uri: image !== '' ? image : undefined }} />

            </Centralize>
            <Edit
              onPress={() => alert('Alterar Foto')}
            >
              <Icon1
                name='ios-camera-outline'
                size={28}
                color={colors.white}
              />
            </Edit>
>>>>>>> Pedro
          </UserPhoto>

          <UserName>
            <NameText>{name}</NameText>
          </UserName>
<<<<<<< HEAD

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
=======
          <Button>
            <BtnEdit onPress={() => navigation.navigate('EditProfile')}>
              <Icon1 name='create-outline' size={28} color={colors.darkGreen} />
            </BtnEdit>

            <BtnDelete onPress={deleteAlert}>
              <Icon1 name='md-trash-bin' size={28} color={colors.darkRed} />
            </BtnDelete>
          </Button>
          <HeaderInfo>
            <Icon3 name='idcard' size={24} color={colors.green} />
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
              {notes === "" || notes === null || notes === undefined ?
                <Subtitle>Sem observações</Subtitle>
                :
                <Subtitle>{notes}</Subtitle>
              }
            </TextControl>
          </Info>

          <HeaderKinship>
            <Icon2 name='users' size={24} color={colors.green} />
            <HeaderKinshipText>Parentesco</HeaderKinshipText>
          </HeaderKinship>

          <Kinship1>
            <KinshipTitle>1ª Opção</KinshipTitle>
            <KinshipLine>
              <Icon2
                name='bookmark'
                size={24}
                color={colors.green}
                style={{ paddingLeft: 15 }}
              />
              <KinshipValue>{kinshipType1}</KinshipValue>
            </KinshipLine>

            <KinshipLine>
              <Icon2
                name='user'
                size={24}
                color={colors.green}
                style={{ paddingLeft: 15 }}
              />
              <KinshipValue>{kinshipName1}</KinshipValue>
            </KinshipLine>

            <KinshipLine>
              <Icon1
                name='home-outline'
                size={24}
                color={colors.green}
                style={{ paddingLeft: 15 }}
              />
              <KinshipValue>{kinshipAddress1}</KinshipValue>
            </KinshipLine>

            <KinshipLine>
              <Icon2
                name='phone'
                size={24}
                color={colors.green}
                style={{ paddingLeft: 15 }}
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
                style={{ paddingLeft: 15 }}
              />
              {kinshipType2 === "" || kinshipType2 === null || kinshipType2 === undefined ?
                <KinshipValue>Não informado</KinshipValue>
                :
                <KinshipValue>{kinshipType2}</KinshipValue>
              }
            </KinshipLine>

            <KinshipLine>
              <Icon2
                name='user'
                size={24}
                color={colors.green}
                style={{ paddingLeft: 15 }}
              />
              {kinshipName2 === "" || kinshipName2 === null || kinshipName2 === undefined ?
                <KinshipValue>Não informado</KinshipValue>
                :
                <KinshipValue>{kinshipName2}</KinshipValue>
              }
            </KinshipLine>

            <KinshipLine>
              <Icon1
                name='home-outline'
                size={24}
                color={colors.green}
                style={{ paddingLeft: 15 }}
              />
              {kinshipAddress2 === "" || kinshipAddress2 === null || kinshipAddress2 === undefined ?
                <KinshipValue>Não informado</KinshipValue>
                :
                <KinshipValue>{kinshipAddress2}</KinshipValue>
              }
            </KinshipLine>

            <KinshipLine>
              <Icon2
                name='phone'
                size={24}
                color={colors.green}
                style={{ paddingLeft: 15 }}
              />
              {kinshipPhone2 === "" || kinshipPhone2 === null || kinshipPhone2 === undefined ?
                <KinshipValue>Não informado</KinshipValue>
                :
                <KinshipValue>{kinshipPhone2}</KinshipValue>
              }
            </KinshipLine>
          </Kinship2>

          <RNModal
            isVisible={modalVisible1}
            animationIn='zoomIn'
            animationOut='zoomOut'
          >
            <ModalView>
              <Row>
                <Icon1 name='warning-outline' color={colors.yellow} size={22} style={{ paddingRight: 5 }} />
                <ModalTitle>Atenção!</ModalTitle>
              </Row>
              <ModalSubtitle>Você deseja realmente excluir o paciente?</ModalSubtitle>
              <Buttons>
                <ModalButtonCancel onPress={() => setModalVisible1(false)}>
                  <ButtonTextCancel>Cancelar</ButtonTextCancel>
                </ModalButtonCancel>
                <ModalButtonOk
                  onPress={() => userDelete()}
                >
                  <ButtonTextOk>Ok</ButtonTextOk>
                </ModalButtonOk>
              </Buttons>
            </ModalView>
          </RNModal>

          <RNModal
            isVisible={modalVisible2}
            animationIn='zoomIn'
            animationOut='zoomOut'
          >
            <ModalView>
              <Row>
                <Icon2 name='check' color={colors.green} size={22} style={{ paddingRight: 5 }} />
                <ModalTitleSuccess>Sucesso!</ModalTitleSuccess>
              </Row>
              <ModalSubtitle>O paciente foi excluído.</ModalSubtitle>
              <Buttons>
                <ModalButtonSuccess
                  onPress={() => navigation.navigate('Route')}
                >
                  <ButtonTextOk>Ok</ButtonTextOk>
                </ModalButtonSuccess>
              </Buttons>
            </ModalView>
          </RNModal>

          <RNModal
            isVisible={modalVisible3}
            animationIn='zoomIn'
            animationOut='zoomOut'
          >
            <ModalView>
              <Row>
                <Icon4 name='error-outline' color={colors.red} size={22} style={{ paddingRight: 5 }} />
                <ModalTitleError>Ops!</ModalTitleError>
              </Row>
              <ModalSubtitle>Ocorreu um erro ao excluir paciente.</ModalSubtitle>
              <Buttons>
                <ModalButtonError
                  onPress={() => setModalVisible3(false)}
                >
                  <ButtonTextOk>Ok</ButtonTextOk>
                </ModalButtonError>
              </Buttons>
            </ModalView>
          </RNModal>

>>>>>>> Pedro
        </Content>
      </ScrollView>
    </Container>
  )
}