import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #92BFE0;
    flex: 1;
    justify-content: center;
    align-items: center;
    
`;

export const TextLogo = styled.Text`
    font-size: 30px;
    color: #094067;
    margin-top: 100px;
    font-weight: bold;
`;


export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
    flex: 1;
    left: 0px;
    margin-top: 90px;
    background: white;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    `;

export const TextLogin = styled.Text`
    margin-bottom: 20px;
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

export const SignMessageButtonText = styled.Text`
    font-size: 16px;
    color: #094067;
`;

export const SignMessageButtonTextBold = styled.Text`
    font-size: 16px;
    color: #094067;
    font-weight: bold;
    margin-left: 5px;
`;