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

  return (
    <Container>
      <ScrollView>
        <Content>
          <Header>
            <Back onPress={() => navigation.goBack()}>
              <Icon1 name='chevron-back-outline' color={colors.gray} size={28} />
              <BackText>Ficha do paciente</BackText>
            </Back>
          </Header>

          <UserPhoto>
            <Centralize>
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
          </UserPhoto>

          <UserName>
            <NameText>{name}</NameText>
          </UserName>
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

        </Content>
      </ScrollView>
    </Container>
  )
}