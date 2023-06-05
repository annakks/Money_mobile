import React, {useState} from "react";
import {Container, InputArea, TextLogin, CustomButton, CustomButtonText, SignMessageButton, SignMessageButtonTextBold } from './styles';
import Logo from '../../assets/coins.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import SignInput from "../../components/SignInput";
import { useNavigation } from "@react-navigation/native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Api from "../../Api";
import AsyncStorage from "@react-native-community/async-storage";

export default () => {
  
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');


    const navigation = useNavigation();

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {

            let json = await Api.signIn(emailField, passwordField)
            if (json.token){
                await AsyncStorage.setItem('token', json.token);
                console.log('este é o token: ' + json.token)

                navigation.reset({
                    routes: [{name: 'MainTab'}]
                });

                

            } else {
                alert('E-mail e/ou senha não confere! ');
            }
            
            
        } else {
            alert ("Email e senha são obrigatórios!")
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });

    }

    return (
        <KeyboardAwareScrollView>
        <Container>
            <Logo/> 
            <InputArea>
                <TextLogin>Bem vindo ao Money</TextLogin>
                <SignInput IconSvg={EmailIcon} placeholder="Email" value={emailField} onChangeText={t=>setEmailField(t)}/>
                <SignInput IconSvg={LockIcon} placeholder="Senha" value={passwordField} onChangeText={t=>setPasswordField(t)} password={true}/>
            <CustomButton onPress={handleSignClick}>
                <CustomButtonText> Logar </CustomButtonText>
            </CustomButton>
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonTextBold> Cadastre-se </SignMessageButtonTextBold>
            </SignMessageButton>
            </InputArea>
        </Container>
        </KeyboardAwareScrollView>
    )
}