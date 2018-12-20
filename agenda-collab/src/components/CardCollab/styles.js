import styled from 'styled-components';
import { center } from '../../styles/tools';

const color = '#3b86ff';

export const Card = styled.article`    
    background-color: ${color};
    color: #fff;
    text-align: center;
    padding-top: 58px;
    padding-bottom: 40px;
    width: 370px;
    ${center}
`;

export default Card;