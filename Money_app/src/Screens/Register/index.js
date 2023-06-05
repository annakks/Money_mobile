import React, { useState, useEffect } from "react";
import {
  Container,
  TextLogo,
  InputArea,
  CustomButton,
  CustomButtonText,
} from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SignPutRegister from "../../components/SignPutRegister";
import SignPutValue from "../../components/SignPutValue";
import SignInType from "../../components/SignInType";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-community/async-storage";
import Api from "../../Api";

export default () => {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState("despesa");
  const [valueField, setValueField] = useState("");
  const [dateField, setDateField] = useState("");
  const [descriptionField, setDescriptionField] = useState("");
  const [commentField, setCommentField] = useState("");

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleSignClick = async () => {
    if (valueField !== "" && dateField !== "" && descriptionField !== "") {
      const formattedDate = formatDate(dateField);
      const data = {     
        type: selectedType,
        name: descriptionField,
        value: valueField,
        date: formattedDate,
        observation: commentField,
      };

       console.log(data);

      try {
        await Api.postRecord(data)
        .then((response) => {
            console.log(data);
            console.log(response);
            alert ("Registrado com sucesso!")
            navigation.reset({
                routes: [{ name: 'Dashboard' }]
            }); 
        });} catch (error) {
            console.log(error);
        }

    } else {
      alert("Todos os Campos são de Preenchimento obrigatório!");
    }
  };

  function formatDate(dateField) {
    const parts = dateField.split("/");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

  
  const [id, setId] = useState();

  const getProfile = async () => {
    const token = await AsyncStorage.getItem("token");
    try {
      await Api.checkToken(token).then((response) => {
        setId(response.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  console.log(id);
  console.log("Tipo: " + selectedType);

  return (
    <KeyboardAwareScrollView>
      <Container>
        <TextLogo>Novo Lançamento</TextLogo>
        <InputArea>
          <SignPutValue
            placeholder="R$ Valor"
            value={valueField}
            onChangeText={(t) => setValueField(t)}
          />
          <SignInType
            selectedType={selectedType}
            onTypeChange={handleTypeChange}
          />
          <SignPutRegister
            placeholder="DD/MM/AAAA"
            value={dateField}
            onChangeText={(t) => setDateField(t)}
          />
          <SignPutRegister
            placeholder="Descrição"
            value={descriptionField}
            onChangeText={(t) => setDescriptionField(t)}
          />
          <SignPutRegister
            placeholder="Comentário"
            value={commentField}
            onChangeText={(t) => setCommentField(t)}
          />
          <CustomButton onPress={handleSignClick}>
            <CustomButtonText>Adicionar</CustomButtonText>
          </CustomButton>
        </InputArea>
      </Container>
    </KeyboardAwareScrollView>
  );
};