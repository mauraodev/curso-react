import styled from 'styled-components';

const color = '#3b86ff';

export const Card = styled.article`
    font-family: 'Open Sans', sans-serif;
    background-color: ${color};
    color: #fff;
    text-align: center;
`;

export const Name = styled.h1`
    font-size: 28px;
    text-transform: uppercase;
    color: #fff;
`;

export const Price = styled.h2``;

export const Description = styled.p``;

export const Button = styled.a`
    box-sizing: border-box;
    line-height: 35px;
    border-radius: 4px;
    width: 120px;
    height: 35px;
    background-color: #fff;
    color: ${color};

    &:hover {
        backgroud-color: ${color};
        color: #fff;
        border: 1px solid #fff;
    }
`;