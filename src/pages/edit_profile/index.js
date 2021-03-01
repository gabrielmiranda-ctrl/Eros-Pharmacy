import React, { useState, useEffect } from 'react';
import { ScrollView, TextInput, LogBox } from 'react-native';
import {
  Container,
  Content,
  Header,
  Back,
  BackText,
  FieldSet,
  Legend,
  LegendMultiline,
  Icons,
  Update,
  ModalTitle,
  ModalSubtitle,
  ModalView,
  Buttons,
  OkButton,
  OkButtonText,
  Row,
  ModalTitleSuccess,
  OkButtonSuccess
} from './styles';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styled/colors';
import firestore from '@react-native-firebase/firestore';
import { TextInputMask } from 'react-native-masked-text';
import RNModal from 'react-native-modal';

export default function EditProfile({ navigation }) {
  const [birthDate, setBirthDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [notes, setNotes] = useState('');

  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);

  useEffect(() => {
    firestore().collection('patients').doc('teste').onSnapshot(documentSnapshot => {
      setBirthDate(documentSnapshot.data().birthDate)
      setFirstName(documentSnapshot.data().firstName)
      setLastName(documentSnapshot.data().lastName)
      setCPF(documentSnapshot.data().cpf)
      setRG(documentSnapshot.data().rg)
      setNotes(documentSnapshot.data().notes)
    })
  }, [])

  function updateProfile(birthDate, firstName, lastName, cpf, rg, notes) {
    if (
      (!birthDate || birthDate.replace(/\s/g, "") === "")
      ||
      (!firstName || firstName.replace(/\s/g, "") === "")
      ||
      (!lastName || lastName.replace(/\s/g, "") === "")
      ||
      (!cpf || cpf.replace(/\s/g, "") === "")
      ||
      (!rg || rg.replace(/\s/g, "") === "")) {
      setModalVisible1(true);
    }
    else {
      // Máscara do nome do paciente
      firstName = firstName.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
      const normalizeFirstName = firstName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const maskFirstName = normalizeFirstName.replace(/[&\/\\#,@0123456789+()$~%.'":*?<>{}]/g, '');

      // Máscara do sobrenome do paciente
      lastName = lastName.toLowerCase().replace(/(?:^|\s)\S/g, function (b) {
        return b.toUpperCase();
      });
      const normalizeLastName = lastName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const maskLastName = normalizeLastName.replace(/[&\/\\#,@0123456789+()$~%.'":*?<>{}]/g, '');

      firestore().collection('patients').doc('teste').update({
        birthDate: birthDate,
        firstName: maskFirstName,
        lastName: maskLastName,
        cpf: cpf,
        rg: rg,
        notes: notes,
        uploadedAt: new Date(),
      })
        .then(() => {
          setModalVisible3(true);
        }).catch((error) => {
          setModalVisible2(true);
          console.log(error);
        });
    }
  }

  LogBox.ignoreAllLogs();

  return (
    <Container>

      <Header>
        <Back onPress={() => navigation.goBack()}>
          <Icon1 name='chevron-back-outline' color={colors.gray} size={28} />
          <BackText>Voltar</BackText>
        </Back>

        <Icons>
          <Update onPress={() => updateProfile(birthDate, firstName, lastName, cpf, rg, notes)}>
            <Icon2 name="check" size={28} color={colors.gray} />
          </Update>
        </Icons>
      </Header>

      <ScrollView>
        <Content>

          <FieldSet>
            <Legend>Data de nascimento</Legend>
            <TextInputMask
              style={{ paddingHorizontal: 15, paddingTop: 15, color: colors.black, fontSize: 16 }}
              placeholder="Data de nascimento"
              autoCorrect={false}
              keyboardType='numeric'
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY'
              }}
              value={birthDate}
              onChangeText={birthDate => setBirthDate(birthDate)}
            />
          </FieldSet>

          <FieldSet>
            <Legend>Nome</Legend>
            <TextInput
              style={{ paddingHorizontal: 15, paddingTop: 15, color: colors.black, fontSize: 16 }}
              placeholder="Nome"
              autoCorrect={false}
              autoCapitalize="words"
              value={firstName}
              onChangeText={firstName => setFirstName(firstName)}
            />
          </FieldSet>

          <FieldSet>
            <Legend>Sobrenome</Legend>
            <TextInput
              style={{ paddingHorizontal: 15, paddingTop: 15, color: colors.black, fontSize: 16 }}
              placeholder="Sobrenome"
              autoCorrect={false}
              autoCapitalize="words"
              value={lastName}
              onChangeText={lastName => setLastName(lastName)}
            />
          </FieldSet>

          <FieldSet>
            <Legend>CPF</Legend>
            <TextInputMask
              style={{ paddingHorizontal: 15, paddingTop: 15, color: colors.black, fontSize: 16 }}
              placeholder="CPF"
              autoCorrect={false}
              type={'cpf'}
              keyboardType='numeric'
              value={cpf}
              onChangeText={cpf => setCPF(cpf)}
            />
          </FieldSet>

          <FieldSet>
            <Legend>RG</Legend>
            <TextInput
              style={{ paddingHorizontal: 15, paddingTop: 15, color: colors.black, fontSize: 16 }}
              placeholder="RG"
              autoCorrect={false}
              value={rg}
              onChangeText={rg => setRG(rg)}
            />
          </FieldSet>

          <FieldSet>
            <LegendMultiline>Observações</LegendMultiline>
            <TextInput
              style={{ height: 100, textAlignVertical: 'top', paddingHorizontal: 15, paddingTop: 15, color: colors.black, fontSize: 16 }}
              placeholder="Observações (opcional)"
              autoCorrect={false}
              multiline={true}
              value={notes}
              onChangeText={notes => setNotes(notes)}
            />
          </FieldSet>

          <RNModal
            isVisible={modalVisible1}
            animationIn='zoomIn'
            animationOut='zoomOut'
          >
            <ModalView>
              <Row>
                <Icon3 name='error-outline' color={colors.red} size={22} style={{ paddingRight: 5 }} />
                <ModalTitle>Ops!</ModalTitle>
              </Row>
              <ModalSubtitle>Os campos devem ser preenchidos.</ModalSubtitle>
              <Buttons>
                <OkButton>
                  <OkButtonText onPress={() => setModalVisible1(false)}>Ok</OkButtonText>
                </OkButton>
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
                <Icon3 name='error-outline' color={colors.red} size={22} style={{ paddingRight: 5 }} />
                <ModalTitle>Ops!</ModalTitle>
              </Row>
              <ModalSubtitle>Ocorreu um erro ao atualizar os dados.</ModalSubtitle>
              <Buttons>
                <OkButton>
                  <OkButtonText onPress={() => setModalVisible2(false)}>Ok</OkButtonText>
                </OkButton>
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
                <Icon2 name='check' color={colors.green} size={22} style={{ paddingRight: 5 }} />
                <ModalTitleSuccess>Sucesso!</ModalTitleSuccess>
              </Row>
              <ModalSubtitle>Os dados foram atualizados.</ModalSubtitle>
              <Buttons>
                <OkButtonSuccess>
                  <OkButtonText onPress={() => setModalVisible3(false)}>Ok</OkButtonText>
                </OkButtonSuccess>
              </Buttons>
            </ModalView>
          </RNModal>

        </Content>
      </ScrollView>
    </Container >
  );
}