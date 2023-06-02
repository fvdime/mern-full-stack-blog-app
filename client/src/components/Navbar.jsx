import React, { useContext, useEffect, useState } from "react"
import styled from 'styled-components'
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
// import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { Link, useLocation } from "react-router-dom"
import '../App.css'
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContext } from "../UserContext";

const Container = styled.div`
  height: 80px;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Left = styled.div`
  flex: 1;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`
const Logo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  text-decoration: none;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
// const User = styled.img`
//   width: 32px;
//   height: 32px;
//   border-radius: 50%;
//   object-fit: cover;
// `


const Navbar = () => {

  const {userInfo, setUserInfo} = useContext(UserContext)

  const [active, setActive] = useState(false);
  const {pathname} = useLocation()

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);


  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  });


  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null)
  }

  const username = userInfo?.username;

  

  return (
    <Container className={active || pathname !== "/" ? "active navbar" : "navbar"}>
      <Wrapper>
        <Left></Left>
        <Center> <Logo className='link' as="a" href='/'>.faya.</Logo> </Center>
        <Right>
          {username && (
            <>
              <Link className='link' to='/create'>
                <BorderColorOutlinedIcon style={{marginRight:20, marginTop:10}} />
              </Link>
              <Link 
              className='link' 
              to='/' 
              style={{marginTop:10}}
              onClick={logout}
              >
                <LogoutIcon/>
              </Link>
            </>
            )} 
            {!username && (
              <>
                <Link className='link' to='/register' style={{marginTop:10}}>
                  <PersonOutlinedIcon/>
                </Link>
              </>  
            )}     
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar