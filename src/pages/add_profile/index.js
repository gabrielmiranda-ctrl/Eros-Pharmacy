import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { TextInput } from 'react-native-paper';
import {
  Container,
  Content,
  Header,
  Back,
  BackText,
  Icons,
  Add,
  ModalTitle,
  ModalSubtitle,
  ModalView,
  Buttons,
  OkButton,
  OkButtonText,
  Row,
  ModalTitleSuccess,
  OkButtonSuccess,
  Input
} from './styles';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Feather';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import colors from '../../styled/colors';
import firestore from '@react-native-firebase/firestore';
import { TextInputMask } from 'react-native-masked-text';
import RNModal from 'react-native-modal';
import { styles } from './styles';

export default function AddProfile({ navigation }) {

  const [id, setID] = useState(null);
  const [birthDate, setBirthDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [cpf, setCPF] = useState('');
  const [rg, setRG] = useState('');
  const [notes, setNotes] = useState('');
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);

  // Função que verifica se os campos foram preenchidos corretamente.
  function addProfile(birthDate, firstName, lastName, cpf, rg, notes) {
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
    else if (birthDate.length != 10 || cpf.length != 14) {
      setModalVisible4(true);
    }
    else {
      // Criar ID do paciente.
      var length = 20;
      var id = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        id += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      // Máscara do nome do paciente.
      firstName = firstName.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
      });
      const normalizeFirstName = firstName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const maskFirstName = normalizeFirstName.replace(/[&\/\\#,@0123456789+()$~%.'":*?<>{}]/g, '');

      // Máscara do sobrenome do paciente.
      lastName = lastName.toLowerCase().replace(/(?:^|\s)\S/g, function (b) {
        return b.toUpperCase();
      });
      const normalizeLastName = lastName.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const maskLastName = normalizeLastName.replace(/[&\/\\#,@0123456789+()$~%.'":*?<>{}]/g, '');

      // Função que cria novos pacientes no Firestore.
      firestore().collection('patients').doc(id).set({
        id: id,
        birthDate: birthDate,
        firstName: maskFirstName,
        lastName: maskLastName,
        cpf: cpf,
        rg: rg,
        notes: notes,
        createdAt: new Date(),
      })
        .then(() => {
          setModalVisible3(true);
        }).catch((error) => {
          setModalVisible2(true);
          console.log(error);
        });

      setBirthDate('');
      setFirstName('');
      setLastName('');
      setCPF('');
      setRG('');
      setNotes('');
    }
  }

  return (
    <Container>

      <Header>
        <Back onPress={() => navigation.goBack()}>
          <Icon1 name='chevron-back-outline' color={colors.gray} size={28} />
          <BackText>Voltar</BackText>
        </Back>

        <Icons>
          <Add onPress={() => addProfile(birthDate, firstName, lastName, cpf, rg, notes)}>
            <Icon2 name="check" size={28} color={colors.gray} />
          </Add>
        </Icons>
      </Header>

      <ScrollView>
        <Content>

          <TextInput
            style={styles.textInput}
            label='Data de nascimento'
            mode='outlined'
            placeholder='Ex: DD/MM/AAAA'
            autoCorrect={false}
            maxLength={10}
            keyboardType='numeric'
            value={birthDate}
            onChangeText={(birthDate) => setBirthDate(birthDate)}
            render={props =>
              <TextInputMask
                {...props}
                type={'datetime'}
                options={{ format: 'DD/MM/YYYY' }}
              />
            }
            theme={{ colors: { primary: colors.green, text: colors.black } }}
          />

          <TextInput
            style={styles.textInput}
            label='Nome'
            mode='outlined'
            placeholder='Ex: João'
            maxLength={100}
            autoCorrect={false}
            autoCapitalize="words"
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
            theme={{ colors: { primary: colors.green, text: colors.black } }}
          />

          <TextInput
            style={styles.textInput}
            label='Sobrenome'
            mode='outlined'
            placeholder='Ex: Silva'
            maxLength={100}
            autoCorrect={false}
            autoCapitalize="words"
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
            theme={{ colors: { primary: colors.green, text: colors.black } }}
          />

          <TextInput
            style={styles.textInput}
            label='CPF'
            mode='outlined'
            placeholder='Ex: 000.000.000-00'
            autoCorrect={false}
            maxLength={14}
            keyboardType='numeric'
            value={cpf}
            onChangeText={(cpf) => setCPF(cpf)}
            render={props =>
              <TextInputMask
                {...props}
                type={'cpf'}
              />
            }
            theme={{ colors: { primary: colors.green, text: colors.black } }}
          />

          <TextInput
            style={styles.textInput}
            label='RG'
            mode='outlined'
            placeholder='Ex: MG-00.000.000'
            maxLength={13}
            autoCorrect={false}
            value={rg}
            onChangeText={(rg) => setRG(rg)}
            theme={{ colors: { primary: colors.green, text: colors.black } }}
          />

          <TextInput
            style={styles.multilineTextInput}
            label='Observações'
            mode='outlined'
            placeholder='Observações (opcional)'
            maxLength={300}
            autoCorrect={true}
            value={notes}
            onChangeText={(notes) => setNotes(notes)}
            render={props =>
              <Input
                {...props}
                multiline={true}
                style={styles.input}
              />
            }
            theme={{ colors: { primary: colors.green, text: colors.black } }}
          />

          <RNModal
            isVisible={modalVisible1}
            animationIn='zoomIn'
            animationOut='zoomOut'
          >
            <ModalView>
              <Row>
                <Icon3 name='error-outline' color={colors.red} size={22} style={styles.modalIcon} />
                <ModalTitle>Ops!</ModalTitle>
              </Row>
              <ModalSubtitle>Os campos devem ser preenchidos.</ModalSubtitle>
              <Buttons>
                <OkButton onPress={() => setModalVisible1(false)}>
                  <OkButtonText>Ok</OkButtonText>
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
                <Icon3 name='error-outline' color={colors.red} size={22} style={styles.modalIcon} />
                <ModalTitle>Ops!</ModalTitle>
              </Row>
              <ModalSubtitle>Ocorreu um erro ao adicionar paciente.</ModalSubtitle>
              <Buttons>
                <OkButton onPress={() => setModalVisible2(false)}>
                  <OkButtonText>Ok</OkButtonText>
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
                <Icon2 name='check' color={colors.green} size={22} style={styles.modalIcon} />
                <ModalTitleSuccess>Sucesso!</ModalTitleSuccess>
              </Row>
              <ModalSubtitle>O paciente foi adicionado.</ModalSubtitle>
              <Buttons>
                <OkButtonSuccess onPress={() => setModalVisible3(false)}>
                  <OkButtonText>Ok</OkButtonText>
                </OkButtonSuccess>
              </Buttons>
            </ModalView>
          </RNModal>

          <RNModal
            isVisible={modalVisible4}
            animationIn='zoomIn'
            animationOut='zoomOut'
          >
            <ModalView>
              <Row>
                <Icon3 name='error-outline' color={colors.red} size={22} style={styles.modalIcon} />
                <ModalTitle>Ops!</ModalTitle>
              </Row>
              <ModalSubtitle>Algum campo não foi preenchido corretamente.</ModalSubtitle>
              <Buttons>
                <OkButton onPress={() => setModalVisible4(false)}>
                  <OkButtonText>Ok</OkButtonText>
                </OkButton>
              </Buttons>
            </ModalView>
          </RNModal>

        </Content>
      </ScrollView>
    </Container >
  );
}