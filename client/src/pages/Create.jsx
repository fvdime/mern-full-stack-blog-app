import React, { useState } from 'react'
import styled from 'styled-components'
import 'react-quill/dist/quill.snow.css'
import { Navigate } from 'react-router-dom'
import Editor from '../Editor'


const Container = styled.div``

const Form = styled.form`
`

// const Image = styled.img`
// `

const Input = styled.input``

const Button = styled.button``

const Create = () => {

  const [title, setTitle] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [files, setFiles] = useState('')
  const [redirect, setRedirect] = useState(false)

  async function createNewPost(e) {

    const data = new FormData();
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    data.set('file', files[0]);

    e.preventDefault();

    const response = await fetch('http://localhost:4000/post', {
      method: 'POST',
      body: data,
      credentials: 'include', //credentials for cookies!!!!!!!
    });
    if (response.ok) {
      setRedirect(true);
    }
  }


  if (redirect) {
    return <Navigate to={'/'} />
  }

  return (
    <Container>
      <Form onSubmit={createNewPost}>
        <Input 
        type='title' 
        placeholder='Title'
        value={title}
        onChange={e => setTitle(e.target.value)} />
        <Input 
        type='summary' 
        placeholder='Summary'
        value={summary}
        onChange={e => setSummary(e.target.value)} />
        <Input 
        type='file'
        onChange={e => setFiles(e.target.files)} />
        <Editor value={content} onChange={setContent}/>
        <Button>Create Post</Button>
      </Form>
    </Container>
  )
}

export default Create