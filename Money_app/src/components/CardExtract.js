import React from "react";
import styled from "styled-components/native";

const Area = styled.TouchableOpacity`
  background-color: white;
  margin-bottom: 15px;
  border-radius: 20px;
  padding: 14px;
  flex-direction: row;
  flex-wrap: wrap;
  border: 1px solid #90B4CE;
  justify-content: space-between;
`;

const View = styled.View`
`;

const Type = styled.Text`
  color: #3DA9FC;
  font-size: 14px;
  margin-bottom: 15px;
`;

const Date = styled.Text`
  color: #3DA9FC;
  font-size: 14px;
  margin-bottom: 10px;
`;

const Name = styled.Text`
  color: #094067;
  font-size: 14px;
`;

const Value = styled.Text`
  color: #094067;
`;

const Value2 = styled.Text`
  color: #EF4565;
`;

export default ({ type, name, date, value, onPress }) => {

  function formatDate(dateField) {
    const parts = dateField.split("-");
    const day = parts[2];
    const month = parts[1];
    const year = parts[0];
    const formattedDate = `${day}/${month}/${year}`;
    return formattedDate;
  }

  
  return (
    <Area onPress={onPress}>
      <View>
        <Type>Tipo: {type}</Type>
        <Name>Descrição: {name}</Name>
      </View>
      <View>
        <Date>Data: {formatDate(date)}</Date>
        {type === "despesa" ? 
        ( <Value2>Valor: R$ - {value},00</Value2>):
        (<Value>Valor: R$ {value},00</Value>)
        }
      </View>
    </Area>
  );
};
