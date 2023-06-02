import React, {useContext, useEffect, useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useParams} from "react-router-dom"
import {UserContext} from "../UserContext"

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 1400px;
  padding: 30px 0px;
  gap: 50px;
  margin-left: 10rem;
  
`

const SinglePost = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;  
  margin-top: 3rem;
`

const Image = styled.img`
  max-height: 500px;
  object-fit: contain;
`

const Title = styled.h2`
  font-weight: 600;
`

const Content = styled.p`
  font-weight: 300;
  color: #222;
  line-height: 25px;
`

const Button = styled.button`
  width: 15%;
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

const Left = styled.div``

const Right = styled.div`
  width: 380px;
  height: 500px;
  perspective: 800px;
  margin-right: 50px;

  /* :hover > Card{
    cursor: pointer;
    transform: rotateY(180deg);
  } */
`

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 1500ms;
  transform-style: preserve-3d;

  :hover{
    cursor: pointer;
    transform: rotateY(180deg);
  }
`

const Front = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 2rem;
  box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
  backface-visibility: hidden;

`


const Back = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 2rem;
  box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
  backface-visibility: hidden;
  transform: rotateY(180deg);

`



const Post = () => {

  const [postInfo, setPostInfo] = useState(null)
  const {userInfo} = useContext(UserContext)
  const {id} = useParams();

  useEffect(() => {fetch(`http://localhost:4000/post/${id}`).then(response => { response.json().then(postInfo => { setPostInfo(postInfo);
      });
    });
  });

  if (!postInfo) return '';

  return (
    <Container>
      <SinglePost>
        <Left>
            <Image
              src={`http://localhost:4000/${postInfo.cover}`}
              alt=""
            />
          <Title>{postInfo.title}</Title>
          <Content dangerouslySetInnerHTML={{__html:postInfo.content}}/>
          {userInfo.id === postInfo.author._id && (
            <Link className='link' to={`/edit/${postInfo._id}`}>
              <Button>Edit this post</Button>
            </Link>
            )}
        </Left>
        <Right>
          <Card>
            <Front>
            <Image src='https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_380/FSH-1681305453211-bloc04major.jpg'/>
            </Front>
            <Back>
              <Image src='https://www.chanel.com/images/q_auto,f_auto,fl_lossy,dpr_auto/w_380/FSH-1681305450816-bloc02major.jpg'/>
            </Back>
          </Card>
        </Right>
      </SinglePost>
    </Container>
  )
}

export default Post