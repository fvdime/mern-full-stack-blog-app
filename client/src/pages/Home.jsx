import React, { useEffect, useState } from 'react'
import Sliders from '../components/Sliders'
import Posts from './Posts'


const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts)
      });
    })
  }, [])
  return (
    <>
      <Sliders/>
      {posts.length > 0 && posts.map(post => (
        <Posts {...post}/>
      ))}
    </>
  )
}

export default Home