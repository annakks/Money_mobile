import React from "react";
import styled from "styled-components/native";

import Home from "../assets/Home.svg";
import NewRegister from "../assets/NewRegister.svg";
import Profile from "../assets/Profile.svg";

const TabArea = styled.View`
    height: 50px;
    background-color: #90B4CE;
    flex-direction: row; 
`;

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export default ({state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }
    return (
        <TabArea>
            <TabItem onPress={()=> goTo('Register')}>
                <NewRegister style={{opacity: state.index === 0? 1 : 0.5 }} width="24" height="24" fill="white"/>
            </TabItem>
            <TabItem onPress={()=> goTo('Dashboard')}>
                <Home style={{opacity: state.index === 1? 1 : 0.5 }} width="24" height="24" fill="white"/>
            </TabItem>
            <TabItem onPress={()=> goTo('Profile')}>
                <Profile style={{opacity: state.index === 2? 1 : 0.5 }} width="24" height="24" fill="#ffffff"/>
            </TabItem>
        </TabArea>
    );
}