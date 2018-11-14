import React from "react";
import { Card, Name, Price, Description, Button } from './styles';

const App = () => (
    <Card>
        <Name>Curso React</Name>
        <Price>$25</Price>
        <Description>Professional</Description>
        <Button>Buy</Button>
    </Card>
);

export default App;