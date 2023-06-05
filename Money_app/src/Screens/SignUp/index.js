import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';
import SignInput from "../../components/SignInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Container,TextLogo,InputArea,TextLogin,CustomButton,CustomButtonText,SignMessageButton,SignMessageButtonText,SignMessageButtonTextBold} from './styles';
import Api from "../../Api";


export default () => {

    const navigation = useNavigation();

    const handleSignClick = async () => {
        if (nameField != '' && emailField != '' && passwordField != ''){
            let res = await Api.signUp(nameField, emailField, passwordField);
            console.log (res);
            if (res.token){
                await AsyncStorage.setItem('token', res.token);

                navigation.reset({
                    routes: [{name: "Dashboard"}]
                });

        } else {
            alert ("Todos os Campos são de Preenchimento obrigatório!")
        }
    }}

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignIn'}]
        });

    }
    
    const [nameField, setNameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    return (
        <KeyboardAwareScrollView>
        <Container>
            <TextLogo>Cadastro</TextLogo>

            <InputArea>

                <TextLogin>Informe seus Dados.</TextLogin>
                
                <SignInput IconSvg={PersonIcon} placeholder="Nome" value={nameField} onChangeText={t=>setNameField(t)}/>
                <SignInput IconSvg={EmailIcon} placeholder="Email" value={emailField} onChangeText={t=>setEmailField(t)}/>
                <SignInput IconSvg={LockIcon} placeholder="Senha" value={passwordField} onChangeText={t=>setPasswordField(t)} password={true}/>

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>Salvar</CustomButtonText>
                </CustomButton> 
                <SignMessageButton onPress={handleMessageButtonClick}>
                    <SignMessageButtonText>Já possui uma conta?</SignMessageButtonText>
                    <SignMessageButtonTextBold>Faça Login</SignMessageButtonTextBold>
                </SignMessageButton>
            </InputArea>
            
        </Container>
        </KeyboardAwareScrollView>
    )
}