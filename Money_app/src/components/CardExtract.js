import React from "react";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';

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
  color: ${(props) => (props.type == "despesa" ? "#EF4565" : "black")};
  font-size: 18px;
`;

export default ({ type, name, date, value }) => {
  return (
    <Area>
      <View>
        <Type>Tipo : {type}</Type>
        <Name>Descrição: {name}</Name>
      </View>
      <View>
        <Date>Data: {date}</Date>
        <Value value={value}>Valor: {value}</Value>
      </View>
    </Area>
  );
};
