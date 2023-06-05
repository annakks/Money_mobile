import React, { useState, useEffect } from "react";
import {Container, HeaderText, Area, TextArea, IconPhoto } from './styles';
import SignInput from "../../components/SignInput";
import PersonIcon from '../../assets/person.svg';
import EmailIcon from '../../assets/email.svg';
import Photo from '../../assets/person.svg';
import AsyncStorage from "@react-native-community/async-storage";
import Api from "../../Api";



export default () => {

    const [data,setData] =useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const getProfile = async () => {
        const token = await AsyncStorage.getItem('token');
        try{
            await Api.checkToken(token)
            .then(response => {
                setData(response.data)
                setName(response.data.name)
                setEmail(response.data.email)
            })
        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
    getProfile();
    }, []);

    console.log(data);

    return (
        <Container>
            <HeaderText>Perfil</HeaderText>
            <Area>
            <IconPhoto color="#094067"><Photo width="160" height="160" /></IconPhoto>
            <TextArea>
            <SignInput IconSvg={PersonIcon}  value={name}/>
            <SignInput IconSvg={EmailIcon} value={email}/>
            </TextArea>
            </Area>
        </Container>

    );
};