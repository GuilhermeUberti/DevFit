import React from 'react';
import styled from 'styled-components/native';
import { connect } from "react-redux";
import { Text } from "react-native";

import DefaultButton from '../components/DefaultButton';

const Container = styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: #FFF;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 40px;
`;

const HeaderText = styled.Text`
    font-size: 15px;
    color: #333;
    text-align: center;
    margin-bottom: 30px;
`;

const BoldText = styled.Text`
    font-weight: bold;
`;

const NextButton = styled.Button``;

const LevelArea = styled.View`
    width: 100%;
`;

const Page = (props) => {
    let fraseNivel = '';
    switch (props.workoutDays.length) {
        case 1:
            fraseNivel = 'Só um dia não vai adiantar muito, mas...';
            break;
        case 2:
            fraseNivel = 'Dois dias ainda é pouco, mas já da para começar =D';
            break;
        case 3:
            fraseNivel = 'Legal, 3 dias está melhorando!';
            break;
        case 4:
            fraseNivel = 'Tá ficando bom eem..';
            break;
        case 5:
            fraseNivel = '05 dias está quase perfeito =D';
            break;
        case 6:
            fraseNivel = 'Agora sim sua evolução vai ser nível HARD!';
            break;
        case 7:
            fraseNivel = 'Rambo, é você?';
            break;
    }

    const setMyLevel = (l) => {
        props.setLevel(l);
        props.navigation.setParams({ level: l });
    }

    return (
        <Container>
            <HeaderText>{fraseNivel}</HeaderText>
            <HeaderText><BoldText>Qual seu nível hoje?</BoldText></HeaderText>

            <LevelArea>
                <DefaultButton
                    bgcolor={props.level == 'beginner' ? '#A5E8BC' : false}
                    onPress={() => setMyLevel('beginner')} style={{ marginBottom: 20 }} underlayColor="#CCC">
                    <Text>Iniciante</Text>
                </DefaultButton>
                <DefaultButton
                    bgcolor={props.level == 'intermediate' ? '#A5E8BC' : false}
                    onPress={() => setMyLevel('intermediate')} style={{ marginBottom: 20 }} underlayColor="#CCC">
                    <Text>Intermediário</Text>
                </DefaultButton>
                <DefaultButton
                    bgcolor={props.level == 'advanced' ? '#A5E8BC' : false}
                    onPress={() => setMyLevel('advanced')} style={{ marginBottom: 20 }} underlayColor="#CCC">
                    <Text>Avançado</Text>
                </DefaultButton>
            </LevelArea>
        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    const nextAction = () => {
        if (!navigation.state.params || !navigation.state.params.level) {
            alert("Você precisa escolher uma opção para continuar!")
            return
        }

        navigation.navigate('StarterRecommendations');
    }

    return {
        title: '',
        headerRight: <NextButton title="Próximo" onPress={nextAction} />,
        headerRightContainerStyle: {
            marginRight: 10
        }
    }
}

const mapStateToProps = (state) => {
    return {
        level: state.userReducer.level,
        workoutDays: state.userReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLevel: (level) => dispatch({ type: 'SET_LEVEL', payload: { level } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);