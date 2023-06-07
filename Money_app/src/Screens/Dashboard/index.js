import React, { useState, useEffect } from "react";
import { ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardExtract from "../../components/CardExtract"
import { Container, 
  Scroller, 
  HeaderArea, 
  HeaderText, 
  HeaderText2, 
  AreaValue, 
  AreaNumber, 
  ButtonNewRegister, 
  ButtonText,
  AreaExtract,
  LoadingIcon
} from './styles';
import Api from '../../Api';

export default () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);
  const [balance, setBalance] = useState(0);
  const [data, setData] = useState()
  const [name, setName] = useState();
  const [observation, setObservation] = useState();
  const [type, setType] = useState();
  const [value, setValue] = useState();
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  const getList = async () => {
    try {
      await Api.getList()
      .then(response => {
        setList(ordenarPorData(response))
      })
    } catch (error) {
      console.log(error);
    }
  };

  function ordenarPorData(objeto) {
    objeto.sort(function(a, b) {
      var dateA = new Date(a.date);
      var dateB = new Date(b.date);
      return dateB - dateA;
    });
    return objeto;
  }

  const getBalance = async () => {
    try {
      const res = await Api.getBalance(); 
      setBalance(res);
    } catch (error) {
      console.log("Error: " + error.message);
    }
  };

  useEffect(() => {
    getList();
    getBalance();
  }, []);

  useEffect(() => {
  const fetchData = async () => {
    try {
      setIsLoading(true);
      await Promise.all([getList(), getBalance()]);
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  fetchData();
}, []);

  console.log(list);



  return (
    <Container>
      <HeaderArea>
        <HeaderText>Saldo</HeaderText>
        <AreaValue>
          <AreaNumber> R$ {balance.toFixed(2)} </AreaNumber> 
          <ButtonNewRegister onPress={() => navigation.navigate('Register')}>
            <ButtonText>Novo Lançamento</ButtonText>
          </ButtonNewRegister>                 
        </AreaValue>
      </HeaderArea>
      <AreaExtract>
        <Scroller>  
          {isLoading ? (
          <ActivityIndicator size="large" color="#094067" />
        ) : list.length === 0 ? (
          <>
          <HeaderText2>  Você não tem registros!! Faça um novo lançamento</HeaderText2>
          </>
        ) : (
          list.map((data) => (
            <CardExtract
              key={data.id}
              type={data.type}
              name={data.name}
              date={data.date}
              value={data.value}
              onPress={() => navigation.navigate('RegisterUpdate', {dataProp: data})}
            />
          ))
        )}  
        </Scroller>
      </AreaExtract>
    </Container>
  );
};