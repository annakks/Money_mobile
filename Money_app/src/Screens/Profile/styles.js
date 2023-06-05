import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #90B4CE;
    flex: 1;
    align-items: center;
`;

export const HeaderText = styled.Text`
    font-size: 20px;
    color: #094067;
    font-weight: bold;
    margin-top: 50px;
`;

export const Area = styled.View`
    background: white;
    padding: 15px;
    width: 100%;
    flex:1;
    margin-top: 30px;
    margin-bottom: 5px;
    background: white;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
`;

export const TextArea = styled.View`
    padding: 15px;
    margin-top: 50px;
    margin-bottom: 5px;
    color: #808080,
`;

export const IconPhoto = styled.View`
    padding: 30px;
    justify-content: center;
    align-items: center;
`
