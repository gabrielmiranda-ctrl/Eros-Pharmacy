import React, { useState, useEffect } from 'react';
import {
  Container,
  Main,
  Header,
  Avatar,
  Edit,
  Title,
  Subtitle,
  Info,
  Content,
  Back,
  BackText,
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
  ModalButtonError,
  Medicine,
  EditProfile,
  DeleteProfile,
  UserAvatar,
  Name,
  Icons,
} from './styles';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styled/colors';
import { ScrollView, RefreshControl, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import RNModal from 'react-native-modal';
import { styles } from './styles';

export default function Profile({ navigation, route }) {

  const [id, setId] = useState(route.params?.id);
  const [birthDate, setBirthDate] = useState(route.params?.birthDate);
  const [firstName, setFirstName] = useState(route.params?.firstName);
  const [lastName, setLastName] = useState(route.params?.lastName);
  const [cpf, setCPF] = useState(route.params?.cpf);
  const [rg, setRG] = useState(route.params?.rg);
  const [notes, setNotes] = useState(route.params?.notes);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  // Função responsável por atualizar os dados quando o RefreshControl for acionado.
  function onRefresh() {
    setRefreshing(true);
    let unsubscribe = firestore().collection('patients').doc(id).onSnapshot(documentSnapshot => {
      setBirthDate(documentSnapshot.data().birthDate)
      setFirstName(documentSnapshot.data().firstName)
      setLastName(documentSnapshot.data().lastName)
      setCPF(documentSnapshot.data().cpf)
      setRG(documentSnapshot.data().rg)
      setNotes(documentSnapshot.data().notes)
    })
    setTimeout(() => { unsubscribe() }, 2000)
    setRefreshing(false);
  }

  var name = firstName + ' ' + lastName;

  // Função de deletar dados no Firestore.
  function userDelete() {
    setModalVisible1(false);
    firestore().collection('patients').doc(id).delete()
      .then(() => {
        setModalVisible2(true);
      }).catch((error) => {
        setModalVisible3(true);
        console.log(error);
      });
  }

  return (
    <Container>
      <Header>
        <Back onPress={() => navigation.goBack()}>
          <Icon1 name='chevron-back-outline' color={colors.gray} size={28} />
          <BackText>Voltar</BackText>
        </Back>

        <Icons>
          <Medicine>
            <Icon3 name="medicinebox" size={28} color={colors.gray} />
          </Medicine>

          <EditProfile onPress={() => navigation.navigate('EditProfile', { id: id, birthDate: birthDate, firstName: firstName, lastName: lastName, cpf: cpf, rg: rg, notes: notes })} >
            <Icon1 name='create-outline' size={28} color={colors.gray} />
          </EditProfile>

          <DeleteProfile onPress={() => setModalVisible1(true)} >
            <Icon1 name="md-trash-bin-outline" size={28} color={colors.gray} />
          </DeleteProfile>
        </Icons>
      </Header>

      <ScrollView
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <Content>

          <UserAvatar>
            <Avatar source={require("../../../assets/img/default.jpg")} />
            <Edit>
              <Icon1 name='ios-camera-outline' size={20} color={colors.white} />
            </Edit>
          </UserAvatar>
          
          {/* dados */}
          <Name>{name}</Name>

          <Info>
            <Title>Data de nascimento</Title>
            <Subtitle>{birthDate}</Subtitle>
          </Info>

          <Info>
            <Title>Nome</Title>
            <Subtitle>{firstName}</Subtitle>
          </Info>

          <Info>
            <Title>Sobrenome</Title>
            <Subtitle>{lastName}</Subtitle>
          </Info>

          <Info>
            <Title>CPF</Title>
            <Subtitle>{cpf}</Subtitle>
          </Info>

          <Info>
            <Title>RG</Title>
            <Subtitle>{rg}</Subtitle>
          </Info>

          <Info>
            <Title>Observações</Title>
            {notes === "" || notes === null || notes === undefined ?
              <Subtitle>Sem observações</Subtitle>
              :
              <Subtitle>{notes}</Subtitle>
            }
          </Info>


          {/* Modais */}
          <RNModal
            isVisible={modalVisible1}
            animationIn='zoomIn'
            animationOut='zoomOut'
          >
            <ModalView>
              <Row>
                <Icon1 name='warning-outline' color={colors.yellow} size={22} style={styles.modalIcon} />
                <ModalTitle>Atenção!</ModalTitle>
              </Row>
              <ModalSubtitle>Você deseja realmente excluir o paciente?</ModalSubtitle>
              <Buttons>
                <ModalButtonCancel onPress={() => setModalVisible1(false)}>
                  <ButtonTextCancel>Cancelar</ButtonTextCancel>
                </ModalButtonCancel>
                <ModalButtonOk onPress={() => userDelete()}>
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
                <Icon2 name='check' color={colors.green} size={22} style={styles.modalIcon} />
                <ModalTitleSuccess>Sucesso!</ModalTitleSuccess>
              </Row>
              <ModalSubtitle>O paciente foi excluído.</ModalSubtitle>
              <Buttons>
                <ModalButtonSuccess onPress={() => navigation.goBack()}>
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
                <Icon4 name='error-outline' color={colors.red} size={22} style={styles.modalIcon} />
                <ModalTitleError>Ops!</ModalTitleError>
              </Row>
              <ModalSubtitle>Ocorreu um erro ao excluir paciente.</ModalSubtitle>
              <Buttons>
                <ModalButtonError onPress={() => setModalVisible3(false)} >
                  <ButtonTextOk>Ok</ButtonTextOk>
                </ModalButtonError>
              </Buttons>
            </ModalView>
          </RNModal>

        </Content>
      </ScrollView>
    </Container >
  )
}