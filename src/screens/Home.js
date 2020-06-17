import React, { useState } from 'react';
import styled from 'styled-components/native';
import { connect } from 'react-redux';

import HomeMonthScroll from '../components/HomeMonthScroll';
import HomeDaysScroll from '../components/HomeDaysScroll';
import HomeDayStatus from '../components/HomeDayStatus';

const Container = styled.SafeAreaView`
    align-items: center;
`;

const Legend = styled.View`
    width: 90%;
    align-items: flex-start;
    margin-top: 30px;
`;

const LegendText = styled.Text`
    color: #555;
`;

const LengendItem = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 5px;
`;

const LegendBox = styled.View`
    width: 15px;
    height: 15px;
    background-color: #CCC;
    margin-right: 5px;
`;

const Page = (props) => {
    let today = new Date();

    const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
    const [selectedDay, setSelectedDay] = useState(today.getDate());

    return (
        <Container>
            <HomeMonthScroll
                selectedMonth={selectedMonth}
                setSelectedMonth={setSelectedMonth}
            />
            <HomeDaysScroll
                selectedMonth={selectedMonth}
                selectedDay={selectedDay}
                setSelectedDay={setSelectedDay}

                dailyProgress={props.dailyProgress}
                workoutDays={props.workoutDays}
            />
            <HomeDayStatus />

            <LegendText>Mês: {selectedMonth}</LegendText>
            <LegendText>Dia: {selectedDay}</LegendText>

            <Legend>
                <LegendText>Legenda:</LegendText>
                <LengendItem>
                    <LegendBox style={{ backgroundColor: '#B5EEFF' }}></LegendBox>
                    <LegendText>Hoje</LegendText>
                </LengendItem>
                <LengendItem>
                    <LegendBox style={{ backgroundColor: '#B5FFB8' }}></LegendBox>
                    <LegendText>Treino Feito</LegendText>
                </LengendItem>
                <LengendItem>
                    <LegendBox style={{ backgroundColor: '#FFB5B5' }}></LegendBox>
                    <LegendText>Treino Perdido</LegendText>
                </LengendItem>
                <LengendItem>
                    <LegendBox style={{ backgroundColor: '#CCC', opacity: 0.2 }}></LegendBox>
                    <LegendText>Dia de descanso</LegendText>
                </LengendItem>
                <LengendItem>
                    <LegendBox style={{ backgroundColor: '#CCC' }}></LegendBox>
                    <LegendText>Dia Futuro</LegendText>
                </LengendItem>
            </Legend>
        </Container>
    );
}

Page.navigationOptions = ({ navigation }) => {

    const ConfigButtonArea = styled.TouchableHighlight`
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
    `;

    const ConfigButtonImage = styled.Image`
        width: 25px;
        height: 25px;
    `;

    const ConfigButton = () => {

        const btnAction = () => {
            navigation.navigate('HomeConfig');
        }

        return (
            <ConfigButtonArea onPress={btnAction}>
                <ConfigButtonImage source={require('../assets/config.png')} />
            </ConfigButtonArea>
        );
    }

    return {
        title: 'Seu progesso diário',
        headerRight: <ConfigButton />,
        headerRightContainerStyle: {
            marginRight: 10
        }
    }
}

const mapStateToProps = (state) => {
    return {
        dailyProgress: state.userReducer.dailyProgress,
        workoutDays: state.userReducer.workoutDays
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);