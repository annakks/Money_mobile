import React from "react";
import { Container, 
    TextLogo, 
    InputArea,
    TextValue,
    SignInDate,
    SignInDescription,
    SignInComment,
    CustomButton,
    CustomButtonText,

} from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useNavigation } from "@react-navigation/native";
import SignPutRegister from "../../components/SignPutRegister";
import SignPutValue from "../../components/SignPutValue";
import SignInType from "../../components/SignInType";
import Api from "../../Api";
import { useState, useEffect } from "react";


export default ({route}) => {

    const { dataProp } = route.params;
    const navigation = useNavigation();
    const [id, setId] = useState(dataProp.id);
    const [type, setType] = useState(dataProp.type);
    const [name, setName] = useState(newName);
    const [date, setDate] = useState(newDate);
    const [value, setValue] = useState(newValue);
    const [observation, setObservation] = useState(newObserver);
    

    function formatDate(dateField) {
    const parts = dateField.split("-");
    const year= parts[0];
    const month = parts[1];
    const day = parts[2];
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

    const newDate = formatDate(dataProp.date)
    const newName = dataProp.name
    const newObserver = dataProp.observation
    const newValue = `R$ ${dataProp.value}`;


    console.log(dataProp);
    console.log(newValue);

    const handleTypeChange = (type) => {
    setSelectedType(type);
    };


    return (
    <KeyboardAwareScrollView>
      <Container>
        <TextLogo>Atualize dos dados</TextLogo>
        <InputArea>
          <SignPutValue
            placeholder={newValue}
            value={value}
            onChangeText={(t) => setValue(t)}
          />
          <SignInType
            selectedType={type}
            onTypeChange={handleTypeChange}
          />
          <SignPutRegister
            placeholder={newDate}
            value={date}
            onChangeText={(t) => setDate(t)}
          />
          <SignPutRegister
            placeholder={newName}
            value={name}
            onChangeText={(t) => setName(t)}
          />
          <SignPutRegister
            placeholder={newObserver}
            value={observation}
            onChangeText={(t) => setObservation(t)}
          />
          <CustomButton>
            <CustomButtonText>Atualizar</CustomButtonText>
          </CustomButton>
        </InputArea>
      </Container>
    </KeyboardAwareScrollView>
    );
};