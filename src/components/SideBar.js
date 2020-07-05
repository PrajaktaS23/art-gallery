import React from 'react';
import styled from "styled-components";
import { faFacebook,faInstagram,faPinterest,faGoogle } from "@fortawesome/free-brands-svg-icons";
import{FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Span=styled.span`
@media screen and (max-width:800px){
    display:none;
}


`;

const I=styled.i`
 margin-left:10px;
 color: #000;
 background:white;
 padding:10px;
 border-radius:50%;
 width:20px;
 height:20px;
 font-size:20px;
 background:#ffffff;



`;

const Box=styled.div`

display:flex;
justify-content:flex-end;
color:white;



`;

const A=styled.a`
color: white;

text-decoration:none;
 font-size:20px;
 

`;

const Social=styled.nav`
position:relative;
top: 20px;
`;

const ul=styled.ul`
padding:0px;
transform:translate(200px,0);
`;

const Li=styled.li`
display:block;

margin-top:12px;

@media screen and (min-width:800px){
  margin-right:-12vw;

background:rgba(0,0,0,0.5);
width:200px;
   
  text-align:left;
padding:15px;
border-radius:30px 0 0 30px;
transition:all 1s;
}

@media screen and (max-width:800px){
    width:0px;
    margin-right:0;
   
    padding:8px;
    
  
}

&:hover{
  @media screen and (min-width:800px){
   
    transform:translate(-110px,0);
    background:#f4096c;
    A{
     color: white;
    
   }
   

   i{
     color:#f4096c;
     background:white;
     transform:rotate(360deg); 
     transition:all 1s;
   }
  
}

  

  
   
}


`;


function SideBar() {
  return (
  <Box>
   <Social>
       <br/>
       <br/>
       <br/>
       <br/>
       <ul>
           <Li>
           <A href=""><I><FontAwesomeIcon icon={faFacebook} /></I>  <Span>Facebook</Span>
           </A>  
          
            </Li>
            <Li>
             <A href=""><I><FontAwesomeIcon  icon={faInstagram} /></I> <Span>Instagram</Span></A>  
             </Li>
             <Li>
             <A href=""><I><FontAwesomeIcon icon={faPinterest} /></I>  <Span>Pinterest</Span></A>
             </Li>
             <Li>  
             <A href=""><I><FontAwesomeIcon icon={faGoogle} /></I> <Span>GMail</Span> </A>  
           </Li>
       </ul>
   </Social>
   
  </Box>
  

  );
}

export default SideBar;
