import React from 'react';
import styled from "styled-components";
import {Link} from 'react-scroll';
import SideBar from './SideBar';

const Space=styled.div`

height:40vh;


`;

const Header=styled.div`

display:flex;
flex-direction:column;


`;

const Arrow=styled.div`
display:flex;

align-items:center;
justify-content:center;

`;



const Main=styled.div`

display:flex;
flex-direction:row;


`;

const Social=styled.div`

flex:1;
position:relative;


`;


const Container=styled.div`
margin:0;
padding-left:0px;
padding-right:0px;
height:60vh;
width:100vw;
position:relative;
display:flex;
flex:4;


padding-top: 100px;
justify-content:flex-start;
flex-direction:column;
align-items:flex-start;

`;


const Hello=styled.p`
 font-family: 'Inconsolata', monospace;
color: #ff0066;
margin:0;
text-shadow:2px 2px 6px #111;
font-size:5vw;
`;

const Title=styled.p`
 font-family: 'Inconsolata', monospace;
color:white;
margin: 0;
text-shadow:2px 2px 6px #111;
font-size:10vw;


`;

const Box=styled.div`

transform:translate(-50%,-50%);
margin-top:80px;

`;

const Span=styled.span`

display:block;
width:20px;
height:20px;
border-bottom:1px solid white;
border-right:1px solid white;
transform:rotate(45deg);
margin: -10px;
animation:animate 2s infinite;

@keyframes animate
{
  0%
  {
    opacity:0;

  }
  50%
  {
    opacity:1;

  }
  100%
  {
    opacity:0;

  }
}



`;






function Intro() {
  return (
  
    <Header>
  <Main>
 <Container>
    <Hello>Hi</Hello>
    <Title>I'm Prajakta</Title>
    <Hello> an Artist</Hello> 



    
 </Container>

 <Social>
   <SideBar/>
 </Social>
 </Main>
<Arrow>
 <Link to="paintings"  smooth={true} duration={1000}> 
 <Box>
     <Span></Span>
     <Span></Span>
     <Span></Span>

 </Box>
</Link>
</Arrow>
<Space>

</Space>
 
</Header>

  );
}

export default Intro;
