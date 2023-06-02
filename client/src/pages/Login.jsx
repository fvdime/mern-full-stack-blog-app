import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Link, Navigate } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Container = styled.div`
  /* height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;  */

`

const FormContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  margin: 6% auto;
  padding: 5px;
  /* From https://css.glass */
  background: rgba(104, 116, 167, 0.06);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(1px);
  -webkit-backdrop-filter: blur(1px);
  border: 1px solid rgba(104, 116, 167, 0.19);
`

const ButtonBox = styled.div`
  width: 220px;
  margin: 85px 40px 0 180px;
  position: relative;
  border-radius: 30px;
`

const Text = styled.h3``

const Btn = styled.div`
  top: 0;
  left: 0;
  position: absolute;
  width: 110px;
  height: 100%;
  border-radius: 30px;
  transition: .5s;
`
const Form = styled.form`
  top: 180px;
  position: absolute;
  width: 280;
  transition: .5s;
  margin-left: 35px;
  margin-right: 45px;
`

const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  margin: 5px 0 30px 0;
  border-left: 0;
  border-top: 0;
  border-right: 0;
  border-bottom: 1pz solid #999;
  outline: none;
  background: transparent;
`

// const Cinput = styled.input`
//   margin: 30px 10px 30px 0;
// `

// const Span = styled.p`
//   color: #777;
//   font-size: 12px;
//   bottom: 68px;
//   position: absolute;
// `
const SubmitButton = styled.button`
  width: 85%;
  padding: 10px 30px;
  display: block;
  margin: auto;
  cursor: pointer;
  border: 0;
  outline: none;
  border-radius: 30px;
  margin-top: 30px;
  background-color: black;
  color: white;
`

const Login = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [redirect, setRedirect] = useState(false)
  const {setUserInfo} = useContext(UserContext)

  async function login(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      credentials: 'include', 
    })
    if (response.ok) {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        setRedirect(true);
      })
    } else {
      alert('Wrong Credantials!')
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
  }
  return (
    <Container>
      <FormContainer>
        <ButtonBox>
          <Btn></Btn>
          <Text>Welcome Back.</Text>
        </ButtonBox>
        <Form onSubmit={login}>
          <Input 
          type='text' 
          placeholder='Username' 
          required
          value={username}
          onChange={e => setUsername(e.target.value)}/>
          <Input 
          type='password' 
          placeholder='Password' 
          required
          value={password}
          onChange={e => setPassword(e.target.value)}/>
          <Link className='link' to='/register'>Don't you have an account?</Link>
          <SubmitButton type='submit'>Sign In</SubmitButton>
        </Form>
      </FormContainer>
    </Container>
  )
}

export default Login