import React from 'react';
import Styled from 'styled-components';
import { ArrowForwardIosOutlined, ArrowBackIosOutlined } from '@material-ui/icons';
import { useState, useEffect, useRef } from 'react';
import {sliderItems} from '../utils/data';
const Container = Styled.div`
    width:100%;
    height:83vh;
    display:flex;
    position: relative;
`

const Arrow = Styled.div`
    width: 50px;
    height:50px;
    background-color: #fff7f7;
    display:flex;
    align-items: center;
    justify-content:center;
    border-radius:50%;
    position:absolute;
    top: 0;
    bottom: 0;
    left:${props=> props.direction === "left" && "10px"};
    right:${props=> props.direction === "right" && "10px"};
    margin:auto;
    opacity: 0.6;
    z-index:2;
`

const Wrapper = Styled.div`
    display: flex;
    height: 100%;
    transform:translateX(${props=>props.slideIndex *-100}vw);
`
const Slide =Styled.div`
    width: 100vw;
    height:inherit;
    display:flex;
    align-items:center;
    background-color:${props=>props.bg}
`
const ImageContainer =Styled.div`
    flex:1;
    height:100%;
    display:flex;
    align-items: center;
    justify-content:center;
`
const Image =Styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
    border-radius: inherit;
`

const ImageCard = Styled.div`
    min-width: 120px;
    height: 60vh;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`
const InfoContainer =Styled.div`
    flex:1;
`
const Title = Styled.h1`
    font-size:50px;
`;
const Description = Styled.p`
    margin: 50px 0px;
    font-size:20px;
    font-weight:500;
    letter-spacing: 2px;
`;
const Button = Styled.button`
        padding:10px;
        background-color:transparent;
        cursor:pointer;
        border-radius:5px;
        translate: all .2s ease-in;
        &:hover{
            background-color: #ffd11a;
      }
`;

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) =>{
        if (direction === "left") {
             setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
          } else{
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0) 
          } 
          return       
        };

            const delay =2500;
            const timeoutRef = useRef(null);
          
            function resetSliderTimeout() {
              if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
              }
            }
          
            useEffect(() => {
              resetSliderTimeout();
              timeoutRef.current = setTimeout(() =>
              setSlideIndex((prevIndex) =>
                    prevIndex === sliderItems.length - 1 ? 0 : prevIndex + 1
                  ),
                delay
              );
          
              return () => {
                resetSliderTimeout();
              };
            }, [slideIndex]);


  return ( 
    <Container>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <ArrowBackIosOutlined fontSize="large"/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
             <Slide bg={item.bg}>
                 <ImageContainer>
                    <ImageCard>
                        <Image src={item.img}/>
                    </ImageCard>
                 </ImageContainer>
                     <InfoContainer>
                     <Title>{item.title}</Title>
                     <Description>{item.description}</Description>
                     <Button>SHOP NOW</Button>
                 </InfoContainer>
             </Slide>
            ))}
           
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <ArrowForwardIosOutlined  fontSize="large"/>
        </Arrow>
        
    </Container>
  )
};

export default Slider