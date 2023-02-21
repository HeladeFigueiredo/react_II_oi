import React from 'react';
import { Avatar } from '../avatar/Avatar';
import * as S from './styles'

const hightlightList = [
    {
        image: 'https://via.placeholder.com/90',
        text: 'Parceiros',
    },

    {
        image: 'https://via.placeholder.com/90',
        text: 'Desafios',
    },

    {
        image: 'https://via.placeholder.com/90',
        text: 'Comunidades',
    },

    {
        image: 'https://via.placeholder.com/90',
        text: 'Faculdades',
    },

    {
        image: 'https://via.placeholder.com/90',
        text: 'Modelo Educacional',
    },
]

const extractTextStrings = (item) => {
    if (!item.text) return "NONE";
    return item.text;
};

export const removeInvalidValues = (item) => {
    if (item === "NONE") {
        return false;
    } else {
        return true;
    }
};

export const Highlights = () => {

    const normalizeData = () => {
        const result = hightlightList.map((item) => {
            return item.text;
        });
    };

    return (
        <S.Wrapper>
            {hightlightList.map((hightlight, index) => (
                <S.HighlightItem key={ index }> 
                    <Avatar size='small' imagePath={ hightlight.image }/>
                    <S.HighlightText> { hightlight.text } </S.HighlightText>
                </S.HighlightItem>
            ))}
        </S.Wrapper>
    );
};