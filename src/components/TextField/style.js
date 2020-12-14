import styled, { css } from 'styled-components';

const Div = styled.div`
margin: 2px;

`;
const Error = styled.p`
color: red;
`;
const Input = styled.input`
width:98.5%;
padding: 0.9%;
border: 1px solid gray;
border-radius: 3px;
color: solid gray;
${(props) => props.error
        && css`
    border: 1px solid red;
    color: red;
    `};
}
${(props) => (props.value && !props.disabled && !props.error)
        && css`
    border: 1px solid orange;
    color: black;
    `};
}
`;
export { Div, Error, Input };