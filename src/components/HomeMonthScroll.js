import React, { useState, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const MonthScrool = styled.ScrollView`
    width: 100%;
    height: 60px;
`;

const MonthButton = styled.TouchableHighlight`
    width: ${props => props.width};
    justify-content: center;
    align-items: center;
`;

const MonthItem = styled.View`
    width: 90%;
    height: 30px;
    background-color: #EEE;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
`;

const MonthText = styled.Text`

`;

let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',];

const screenWidth = Math.round(Dimensions.get('window').width);
let thirdWidth = screenWidth / 3;

export default (props) => {

    const MonthRef = useRef();

    const [selectedMonth, setSelectedMonth] = useState(props.selectedMonth);

    const handleScrollEnd = (e) => {
        let posX = e.nativeEvent.contentOffset.x;
        let targetMonth = Math.round(posX / thirdWidth);
        setSelectedMonth(targetMonth);
    }

    const scrollToMonth = (m) => {
        let posX = m * thirdWidth;
        MonthRef.current.scrollTo({ x: posX, y: 0, animated: true });
    }

    useEffect(() => {
        props.setSelectedMonth(selectedMonth)
    }, [selectedMonth]);

    useEffect(() => {
        setTimeout(() => {
            scrollToMonth(selectedMonth);
        }, 5)
    }, [props.selectedMonth]);

    return (
        <MonthScrool
            ref={MonthRef}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            decelerationRate="fast"
            snapToInterval={thirdWidth}
            contentContainerStyle={{ paddingLeft: thirdWidth, paddingRight: thirdWidth }}
            onMomentumScrollEnd={handleScrollEnd}
        >
            {months.map((m, k) => (
                <MonthButton key={k} width={thirdWidth} onPress={() => setSelectedMonth(k)} underlayColor="transparent">
                    <MonthItem style={k == selectedMonth ? {
                        backgroundColor: '#CCC',
                        width: '100%',
                        height: 40
                    } : {}}>
                        <MonthText>{m}</MonthText>
                    </MonthItem>
                </MonthButton>
            ))}
        </MonthScrool>
    );
}