import React from 'react';
import Styled from "styled-components";

const Container = Styled.div`
    height:30px;
    background-color: #3f51b5;
    color:white;
    display:flex;
    align-item:center;
    justify-content:center;
`
const Annoucement = () => {
  return (
    <Container>
        We're now open for business....
    </Container>
  )
}

export default Annoucement