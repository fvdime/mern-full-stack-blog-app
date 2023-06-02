import React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Foot = styled.div`
  display: flex;
  background-color: #f8f8f8;
  color: #111;
  border-top: 1px solid #c0c0c0;
`

const Left = styled.div`
  flex: 1;
`

const Ref = styled.p`
  text-align: center;
`

const Center = styled.div`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Logo = styled.h3`
`

const Right = styled.div`
  flex: 1;
`

const ContactInfo = styled.p`` 

const Title = styled.h3``

const Footer = () => {
  return (
    <Container>
      <Foot>
        <Left>
          <Ref>
            I use Chanel official website UI design as a reference. <br/> All the content belong to them. 
          </Ref>
        </Left>
        <Center>
          <Logo>.faya.</Logo>
        </Center>
        <Right>
          <Title>Contact with me!</Title>
          <ContactInfo>
            tthe.faya@gmail.com
          </ContactInfo>
        </Right>
      </Foot>
    </Container>
  )
}

export default Footer