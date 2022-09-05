import React from 'react';
import { Badge} from '@material-ui/core';
import favicon from '../images/favicon.png';
import { Search, ShoppingCart } from '@material-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
        height:fit-content;
        box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;

`;
const Wrapper =styled.div`
        padding: 10px 20px;
        display: flex;
        justify-content:space-between;
        align-items: center;
`
const Left =styled.div`
        flex: 1;
        display:flex;
        align-items:center;
`
const Center =styled.div`
        flex: 1;
        display:flex;
        align-item:center;
`
const Right =styled.div`
        flex: 1;
        display:flex;
        align-item:flex;
        justify-content:flex-end;
`
const Language =styled.span`
        font-size:14px;
        cursor: pointer;
        padding: 10px;
        background-color:#3f51b5;
        border-radius: 50%;
        color:white;
`
const SearchContainer = styled.div`
        border:2px solid lightgray;
        display:flex;
        border-radius:5px;
        align-items:center;
        margin-left:25px;
        padding:5px;

        &:hover,
        &:active{
        border-color:#3f51b5;
        }
`       
const Input =styled.input`
        border: none;
        outline:none;
`

const Logo = styled.h2`
        font-weight:bold;
`
const MenuItem = styled.div`
        font-size: 14px;
        cursor:pointer;
        margin-left:10px;      

        button {
           background-color:#ffd11a;
           border-radius:7px;
           border:none;
           padding:10px;
           transition: all .2s ease-in;
           &:hover{
                 background-color: #3f51b5;
                 color:white;
           }     
        }
`


const Header = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                        <Input type="text" />
                        <Search style={{"font-size":"16px","cursor":"pointer", "color":"gray"}} />
                </SearchContainer>
            </Left>
            <Center>
                <Logo>Tife's Crochet</Logo>
                <Logo style={{"width":"50px", "height":"30px" ,"margin-top":"-0.2px" }}>
                        <img src={favicon} alt="logo" />
                </Logo>
            </Center>
            <Right>
                <MenuItem><button>Sign Up</button></MenuItem>
                <MenuItem><button>Login</button></MenuItem>
                <MenuItem style={{"padding":"8px"}}>
                        <Badge badgeContent={2} color="primary">
                                <ShoppingCart />
                        </Badge>
                </MenuItem>
            </Right>
        </Wrapper> 
    </Container>
  )
}

export default Header
