import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, TextInput } from 'react-native';
import {
  Container,
  Content,
  Header,
  Back,
  BackText,
  FieldSet,
  Legend,
  LegendMultiline,
  UpdateButton,
  UpdateButtonText,
  OptionText,
  Option,
  FieldSetPicker,
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
import { Picker } from '@react-native-community/picker';
import * as Animatable from 'react-native-animatable';
import RNModal from 'react-native-modal';

export default function EditProfile({ navigation }) {
  const [birthDate, setBirthDate] = useState('');
  const [firstName, setFirstName] = useState('');
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

  function updateProfile(
    birthDate,
    firstName,
    lastName,
    medication,
    notes,
    kinshipType1,
    kinshipName1,
    kinshipAddress1,
    kinshipPhone1,
    kinshipType2,
    kinshipName2,
    kinshipAddress2,
    kinshipPhone2) {
    if (
      (!birthDate || birthDate.replace(/\s/g, "") === "")
      ||
      (!firstName || firstName.replace(/\s/g, "") === "")
      ||
      (!lastName || lastName.replace(/\s/g, "") === "")
      ||
      (!medication || medication.replace(/\s/g, "") === "")
      ||
      (!kinshipType1 || kinshipType1.replace(/\s/g, "") === "")
      ||
      (!kinshipName1 || kinshipName1.replace(/\s/g, "") === "")
      ||
      (!kinshipAddress1 || kinshipAddress1.replace(/\s/g, "") === "")
      ||
      (!kinshipPhone1 || kinshipPhone1.replace(/\s/g, "") === "")) {
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

      // Máscara do nome do parente 1
      kinshipName1 = kinshipName1.toLowerCase().replace(/(?:^|\s)\S/g, function (c) {
        return c.toUpperCase();
      });
      const normalizeKinshipName1 = kinshipName1.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const maskKinshipName1 = normalizeKinshipName1.replace(/[&\/\\#,@0123456789+()$~%.'":*?<>{}]/g, '');

      // Máscara do nome do parente 2
      kinshipName2 = kinshipName2.toLowerCase().replace(/(?:^|\s)\S/g, function (d) {
        return d.toUpperCase();
      });
      const normalizeKinshipName2 = kinshipName2.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
      const maskKinshipName2 = normalizeKinshipName2.replace(/[&\/\\#,@0123456789+()$~%.'":*?<>{}]/g, '');

      firestore()
        .collection('patients')
        .doc('teste')
        .update({
          birthDate: birthDate,
          firstName: maskFirstName,
          lastName: maskLastName,
          medication: medication,
          notes: notes,
          kinshipType1: kinshipType1,
          kinshipName1: maskKinshipName1,
          kinshipAddress1: kinshipAddress1,
          kinshipPhone1: kinshipPhone1,
          kinshipType2: kinshipType2,
          kinshipName2: maskKinshipName2,
          kinshipAddress2: kinshipAddress2,
          kinshipPhone2: kinshipPhone2,
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

  const rubberBandAnimRef = useRef();

  return (
    <Container>
      <ScrollView>
        <Content>

          <Header>
            <Back onPress={() => navigation.goBack()}>
              <Icon1 name='chevron-back-outline' color={colors.gray} size={28} />
              <BackText>Editar dados</BackText>
            </Back>
          </Header>

          <FieldSet>
            <Legend>Data de nascimento</Legend>
            <TextInputMask
              style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15, color: colors.black }}
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
              style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15, color: colors.black }}
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
              style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15, color: colors.black }}
              placeholder="Sobrenome"
              autoCorrect={false}
              autoCapitalize="words"
              value={lastName}
              onChangeText={lastName => setLastName(lastName)}
            />
          </FieldSet>

          <FieldSet>
            <LegendMultiline>Medicação</LegendMultiline>
            <TextInput
              style={{ height: 100, textAlignVertical: 'top', paddingLeft: 15, paddingRight: 15, paddingTop: 15, color: colors.black }}
              placeholder="Medicação..."
              autoCorrect={false}
              multiline={true}
              value={medication}
              onChangeText={medication => setMedication(medication)}
            />
          </FieldSet>

          <FieldSet>
            <LegendMultiline>Observações</LegendMultiline>
            <TextInput
              style={{ height: 100, textAlignVertical: 'top', paddingLeft: 15, paddingRight: 15, paddingTop: 15, color: colors.black }}
              placeholder="Observações (opcional)"
              autoCorrect={false}
              multiline={true}
              value={notes}
              onChangeText={notes => setNotes(notes)}
            />
          </FieldSet>

          <Option>
            <OptionText>1ª Opção (Parentesco)</OptionText>
          </Option>

          <FieldSetPicker>
            <Legend>Tipo</Legend>
            <Picker
              selectedValue={kinshipType1}
              onValueChange={(itemValue, itemIndex) => setKinshipType1(itemValue)}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Mãe" value="Mãe" />
              <Picker.Item label="Pai" value="Pai" />
              <Picker.Item label="Avô" value="Avô" />
              <Picker.Item label="Avó" value="Avó" />
              <Picker.Item label="Filho(a)" value="Filho(a)" />
              <Picker.Item label="Irmão(ã)" value="Irmão(ã)" />
              <Picker.Item label="Sobrinho(a)" value="Sobrinho(a)" />
              <Picker.Item label="Neto(a)" value="Neto(a)" />
              <Picker.Item label="Tio(a)" value="Tio(a)" />
              <Picker.Item label="Outro" value="Outro" />
            </Picker>
          </FieldSetPicker>

          <FieldSet>
            <Legend>Nome completo</Legend>
            <TextInput
              style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15, color: colors.black }}
              placeholder="Nome completo"
              autoCorrect={false}
              autoCapitalize="words"
              value={kinshipName1}
              onChangeText={kinshipName1 => setKinshipName1(kinshipName1)}
            />
          </FieldSet>

          <FieldSet>
            <Legend>Endereço</Legend>
            <TextInput
              style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15, color: colors.black }}
              placeholder="Endereço"
              autoCorrect={false}
              value={kinshipAddress1}
              onChangeText={kinshipAddress1 => setKinshipAddress1(kinshipAddress1)}
            />
          </FieldSet>

          <FieldSet>
            <Legend>Celular</Legend>
            <TextInputMask
              style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15, color: colors.black }}
              placeholder="Celular"
              autoCorrect={false}
              keyboardType='numeric'
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value={kinshipPhone1}
              onChangeText={kinshipPhone1 => setKinshipPhone1(kinshipPhone1)}
            />
          </FieldSet>

          <Option>
            <OptionText>2ª Opção (Parentesco)</OptionText>
          </Option>

          <FieldSetPicker>
            <Legend>Tipo</Legend>
            <Picker
              selectedValue={kinshipType2}
              onValueChange={(itemValue, itemIndex) => setKinshipType2(itemValue)}
            >
              <Picker.Item label="Selecione" value="" />
              <Picker.Item label="Mãe" value="Mãe" />
              <Picker.Item label="Pai" value="Pai" />
              <Picker.Item label="Avô" value="Avô" />
              <Picker.Item label="Avó" value="Avó" />
              <Picker.Item label="Filho(a)" value="Filho(a)" />
              <Picker.Item label="Irmão(ã)" value="Irmão(ã)" />
              <Picker.Item label="Sobrinho(a)" value="Sobrinho(a)" />
              <Picker.Item label="Neto(a)" value="Neto(a)" />
              <Picker.Item label="Tio(a)" value="Tio(a)" />
              <Picker.Item label="Outro" value="Outro" />
            </Picker>
          </FieldSetPicker>

          <FieldSet>
            <Legend>Nome completo</Legend>
            <TextInput
              style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15, color: colors.black }}
              placeholder="Nome completo"
              autoCorrect={false}
              autoCapitalize="words"
              value={kinshipName2}
              onChangeText={kinshipName2 => setKinshipName2(kinshipName2)}
            />
          </FieldSet>

          <FieldSet>
            <Legend>Endereço</Legend>
            <TextInput
              style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15, color: colors.black }}
              placeholder="Endereço"
              autoCorrect={false}
              value={kinshipAddress2}
              onChangeText={kinshipAddress2 => setKinshipAddress2(kinshipAddress2)}
            />
          </FieldSet>

          <FieldSet>
            <Legend>Celular</Legend>
            <TextInputMask
              style={{ paddingLeft: 15, paddingTop: 15, paddingRight: 15, color: colors.black }}
              placeholder="Celular"
              autoCorrect={false}
              keyboardType='numeric'
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
              }}
              value={kinshipPhone2}
              onChangeText={kinshipPhone2 => setKinshipPhone2(kinshipPhone2)}
            />
          </FieldSet>

          <Animatable.View ref={rubberBandAnimRef} style={{ flex: 1, width: '85%', marginTop: 25, marginBottom: 30 }}>
            <UpdateButton
              onPress={() => {
                updateProfile(
                  birthDate,
                  firstName,
                  lastName,
                  medication,
                  notes,
                  kinshipType1,
                  kinshipName1,
                  kinshipAddress1,
                  kinshipPhone1,
                  kinshipType2,
                  kinshipName2,
                  kinshipAddress2,
                  kinshipPhone2)
                if (true) {
                  rubberBandAnimRef.current.rubberBand(800);
                }
              }}
            >
              <UpdateButtonText>Salvar</UpdateButtonText>
              <Icon2 name='check' color={colors.white} size={25} />
            </UpdateButton>
          </Animatable.View>

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