import React from 'react';
import {Container, Screen, Previous, Current, Button} from './Styled'

export default function Calculator() {
  return (
    <Container>
        <Screen>
            <Previous>10 +</Previous>
            <Current>10</Current>
        </Screen>
        <Button></Button>
    </Container>
  );
}
