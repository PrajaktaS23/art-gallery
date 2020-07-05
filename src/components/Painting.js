import React from 'react';
import styled from "styled-components";
import one from '../images/1.jpeg';
import two from '../images/2.jpeg';
import three from '../images/3.jpeg';


const Container=styled.div`
margin:0;
padding:0px;
padding-bottom:50px;
padding-top:80x;
width:100vw;
position:relative;




display:flex;
justify-content:space-around;

align-items:center;

@media screen and (min-width:800px){
    flex-direction:row;
}
@media screen and (max-width:800px){
    flex-direction:column;
}


`;

const Image=styled.img`

margin:10px;
width:300px;
height:400px;
padding-top:80px;




`;


function Painting() {
  return (
      <section id="paintings">
  <Container>

    <Image src={one}></Image>
    <Image src={two}></Image>
    <Image src={three}></Image>

  </Container>
  </section>

  );
}

export default Painting;
