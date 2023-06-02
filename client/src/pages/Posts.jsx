import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  gap: 30px;
  margin: 30px;
`

const Entry = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #eeecec;
  cursor: pointer;
`
const Left = styled.div``

const Image = styled.img`
  max-width: 200px;

`

const Right = styled.div``

const Title = styled.h3`
  margin: 0;
  font-size: 1.8rem;
`

const Author = styled.h6`
  font-size: 1rem;
`

const Text = styled.p``


//when id come from db it is _id!!!!!!!!!!!!!
const Posts = ({_id, title, summary, cover, content, author}) => {
  return (
    <Container>
      <Link className='link' to={`/post/${_id}`}>
        <Entry>
          <Left>
            <Image src={"http://localhost:4000/"+cover} />
          </Left>
          <Right>
            <Title>{title}</Title>
            <Author>{author.username}</Author>
            <Text>{summary}</Text>
          </Right>
        </Entry>
      </Link>
    </Container>
  )
}

export default Posts