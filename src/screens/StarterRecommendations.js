import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';
import Workout from '../components/Workout';
import workoutJson from '../presetWorkouts.json';
import { StackActions, NavigationAction, NavigationActions } from "react-navigation";

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

const NextButton = styled.Button``;

const BoldText = styled.Text`
    font-weight: bold;
`;

const WorkoutList = styled.FlatList`
    width: 100%;
`;

const Page = (props) => {

    useEffect(() => {
        props.navigation.setParams({ myWorkouts: props.myWorkouts })
    }, [props.myWorkouts]);

    const addWorkout = (item) => {
        if (props.myWorkouts.findIndex(i => i.id == item.id) < 0) {
            props.addWorkout(item);
        } else {
            props.removeWorkout(item);
        }
    }

    return (
        <Container>
            <HeaderText>Opções de treino com base no seu objetivo.</HeaderText>
            <HeaderText><BoldText>Você selecionou {props.myWorkouts.length} treino(s)!</BoldText></HeaderText>

            <WorkoutList
                data={workoutJson}
                renderItem={({ item }) => <Workout
                    data={item}
                    addAction={() => addWorkout(item)}
                />}
                keyExtractor={item => item.id}
            />
        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    let btnNext = 'Ignorar';
    if (navigation.state.params && navigation.state.params.myWorkouts.length > 0) {
        btnNext = 'Concluir';
    }

    const nextAction = () => {
        navigation.dispatch(StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'AppTab' })
            ]
        }))
    }

    return {
        title: '',
        headerRight: <NextButton title={btnNext} onPress={nextAction} />,
        headerRightContainerStyle: {
            marginRight: 10
        }
    }
}

const mapStateToProps = (state) => {
    return {
        myWorkouts: state.userReducer.myWorkouts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addWorkout: (workout) => dispatch({ type: 'ADD_WORKOUT', payload: { workout } }),
        removeWorkout: (workout) => dispatch({ type: 'REMOVE_WORKOUT', payload: { workout } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);