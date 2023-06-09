import React, { useEffect, useState } from 'react';
import { Container, Loading } from './styles';
import Logo from '../../assets/coins.svg';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-community/async-storage";
import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const [fadeStarted, setFadeStarted] = useState(false);
  
  useEffect(() => {
    const signInToken = async () => {
      const token = await AsyncStorage.getItem('token');

      if (token){
        try{ 
          await Api.checkToken(token)
          .then(() => {
            navigation.reset({
                routes: [{ name: 'MainTab' }]
            }); 
          })
        } catch(e){
        navigation.navigate("SignIn")
      } 
    } else {
      navigation.navigate("SignIn")
    }
  };

    signInToken()
    
  }, []);

  return (
    <Container>
      <Logo />
      <Loading size="large" color="#FFFFFF" />
    </Container>
  );
};