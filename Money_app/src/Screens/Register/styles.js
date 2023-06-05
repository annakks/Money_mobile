import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #92BFE0;
    flex: 1; 
`;

export const TextLogo = styled.Text`
    font-size: 20px;
    color: #094067;
    margin-top: 40px;
    margin-bottom: 10px;
    margin-left: 30px;
    font-weight: bold;
`;


export const InputArea = styled.View`
    padding: 40px;
    width: 100%;
    flex: 1;
    margin-top: 20px;
    background: white;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
`;

export const TextValue = styled.View`
    font-size: 20px;
    justify-content: center;
    align-items: center;
`;

export const SignInType = styled.View`
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

export const SignInDate = styled.View`
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

export const SignInDescription = styled.View`
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

export const SignInComment = styled.View`
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