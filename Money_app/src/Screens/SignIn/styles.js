import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #90B4CE;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
`;

export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
    flex:1;
    margin-top: 50px;
    background: white;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    `;

export const TextLogin = styled.Text`
    margin-top: 10px;
    margin-bottom: 50px;
    font-size: 20px;
    color: #094067;
`;

export const CustomButton = styled.TouchableOpacity`
    height: 60px;
    width: 200px;
    margin: 0 auto;
    background-color: #3DA9FC;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    `;

export const CustomButtonText = styled.Text`
    font-size: 18px;
    color: white;
    font-weight: bold;
`;

export const SignMessageButton = styled.TouchableOpacity`
    justify-content: center;
    flex-direction: row;
    margin-top: 50px;
    margin-bottom: 20px;

`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #094067;
    font-weight: bold;
`;