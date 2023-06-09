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
    const [id, setId] = useState(dataProp.idRecord);
    const [name, setName] = useState(newName);
    const [date, setDate] = useState(newDate);
    const [value, setValue] = useState(newValue);
    const [observation, setObservation] = useState(newObserver);
    const [user, setUser] = useState(dataProp.user);
    const [selectedType, setSelectedType] = useState(dataProp.type);
    

    function formatDateReq(dateField) {
    const parts = dateField.split("-");
    const year= parts[0];
    const month = parts[1];
    const day = parts[2];
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }


    const newValue = `R$ ${dataProp.value}`;
    const newDate = formatDateReq(dataProp.date)
    const newName = dataProp.name
    const newObserver = dataProp.observation
    


    console.log(dataProp);
    console.log(newValue);
    console.log(selectedType)

    const handleTypeChange = (type) => {
    setSelectedType(type);
    };
    

    function formatDate(dateField) {
    const parts = dateField.split("/");
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  }

    const handleSignClick = async () => {
        const formattedDate = formatDate(date);
        const data = {
            idRecord: id,
            type: selectedType,
            name: name,
            value: value,
            date: formattedDate, 
            observation: observation, 
            id_User: user
        };
        
        console.log(data);

        try{
            await Api.updateRecord(data)
            .then((response) =>{
                console.log(response);
                alert ("Atualizado com Sucesso!")
                navigation.reset({
                    routes: [{name: 'Dashboard'}]
                });
            });

        }catch (error){
            console.log(error);
        }

    }


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
            selectedType={selectedType}
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
          <CustomButton onPress={handleSignClick}>
            <CustomButtonText>Atualizar</CustomButtonText>
          </CustomButton>
        </InputArea>
      </Container>
    </KeyboardAwareScrollView>
    );
};