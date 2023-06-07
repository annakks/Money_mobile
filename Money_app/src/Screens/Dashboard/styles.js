import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #90B4CE;
    flex: 1;    
`;

export const Scroller = styled.ScrollView`
    flex: 1;
    padding: 2px;
`;

export const HeaderArea = styled.View`
    margin-top: 15px;

`;

export const HeaderText = styled.Text`
    font-size: 20px;
    color: #094067;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 30px;
    font-weight: bold;
`;

export const HeaderText2 = styled.Text`
    font-size: 20px;
    color: #094067;
    margin-top: 150px;
    margin-left: 50px;
    font-weight: bold;
    max-width: 250px;
    justify-content: center;
`;

export const AreaValue = styled.View`
    height: 180px;
    background-color: white;
    border-radius: 20px;
    box-sizing: border-box;
    padding-left: 15px;
    margin-bottom: 15px;
    margin-left: 30px;
    margin-right: 30px;
`;

export const AreaNumber = styled.Text`
    font-size: 30px;
    font-weight: bold;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`;

export const ButtonNewRegister = styled.TouchableOpacity`
    height: 40px;
    width: 200px;
    margin: 0 auto;
    background-color: #3DA9FC;
    border-radius: 60px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

export const ButtonText = styled.Text`
    font-size: 15px;
    color: white;
    font-weight: bold;
`;

export const AreaExtract = styled.View`
    background: white;
    padding: 15px;
    width: 100%;
    flex:1;
    margin-top: 10px;
    margin-bottom: 5px;
    background: white;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
`;

export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
    
`;

