import React from 'react';
import {Container, Screen, Previous, Current, Button} from './Styled'

export default function Calculator() {
  return (
    <Container>
        <Screen>
            <Previous>10 +</Previous>
            <Current>10</Current>
        </Screen>
        <Button gridSpan={2}>AC</Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button></Button>
        <Button gridSpan={2}>=</Button>
    </Container>
  );
}
