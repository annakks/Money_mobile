import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 100px;
    background-color: white;
    border: 1px solid #3DA9FC;
    border-radius: 20px;
    box-sizing: border-box;
    flex-direction: row;
    padding-left: 15px;
    margin-bottom: 15px;
`;

const Input = styled.TextInput`
    font-size: 18px;
    margin-left: 100px;    
`;

export default ({placeholder, value, onChangeText}) => {
    return (
        <InputArea>
            <Input placeholder={placeholder} placeholderTextColor="#A7A7A7" value={value} onChangeText={onChangeText}/>
        </InputArea>

    );
}