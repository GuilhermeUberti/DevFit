import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

const Container = styled.View`
    font-size: 18px;
`;

export default () => {
    return (
        <Container>
            <Text>HomePage</Text>
        </Container>
    );
}