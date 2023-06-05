import React, { useState, useEffect } from "react";
import { useNavigation } from '@react-navigation/native';
import CardExtract from "../../components/CardExtract"
import { Container, 
  Scroller, 
  HeaderArea, 
  HeaderText, 
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
  const [count, setCount] = useState(0)


  const getList = async () => {
    try {
      await Api.getList()
      .then(response => {
        setList(response)
      })
    } catch (error) {
      console.log(error);
    }
  };

  const getBalance = async () => {
    try {
      const res = await Api.getBalance(); // Faz a requisição para obter o saldo do usuário
      setBalance(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getList();
    console.log(list.map)
    getBalance();
  }, []);

  console.log("Esta é a lista :" + list);


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
            <CardExtract 
            onPress={() => 
              navigation.navigate('RegisterUpdate')}
            />
        </Scroller>
      </AreaExtract>
    </Container>
  );
};