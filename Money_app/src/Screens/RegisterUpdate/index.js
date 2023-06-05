import React from "react";
import { Container, 
    TextLogo, 
    InputArea,
    SignPutValue,
    TextValue,
    SignInType,
    SignInDate,
    SignInDescription,
    SignInComment,
    CustomButton,
    CustomButtonText,

} from './styles';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


export default ({route}) => {

    return (
        <KeyboardAwareScrollView>
            <Container>
                <TextLogo>Atualizar Lançamento</TextLogo>   
                <InputArea>
                    <SignPutValue>
                        <TextValue/>
                    </SignPutValue>
                    <SignInType>

                    </SignInType>
                    <SignInDate/>
                    <SignInDescription/>
                    <SignInComment/>
                    <CustomButton>
                        <CustomButtonText> Atualizar </CustomButtonText>
                    </CustomButton>    
                </InputArea>         
            </Container>
        </KeyboardAwareScrollView>
    )
}