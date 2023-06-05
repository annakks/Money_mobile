import React from "react";
import styled from "styled-components/native";

const InputArea = styled.View`
    width: 100%;
    height: 60px;
    background-color: white;
    border: 1px solid #3DA9FC;
    border-radius: 20px;
    box-sizing: border-box;
    flex-direction: row;
    padding-left: 15px;
    align-items: center;
    margin-bottom: 25px;
`;

const Input = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: black;
    margin-left: 10px;
`;

export default ({IconSvg, placeholder, value, onChangeText, password}) => {
    return (
        <InputArea>
            <IconSvg width="24" height="24" fill="#3DA9FC"/>
            <Input placeholder={placeholder} placeholderTextColor="#A7A7A7" value={value} onChangeText={onChangeText} secureTextEntry={password}/>
        </InputArea>

    );
}
