import React from 'react'
import CssInJs from './components/CssInJs'
import styled from 'styled-components'
import ContactForm from './components/ContactForm';
console.log(styled)

const H1 = styled.h1`
color:red;
font-size:20px;
`;

const Form = styled.form`
width:500px;

background-color:#eee;
color:white;
padding:10px;
margin:20px;
`;

const Input = styled.input`
width:96%;
padding:10px;
border:1px solid #efefef;
`;


const Button = styled.button`
background:purple;
padding:10px;
margin:10px;
border:none;
color:#fff;
`;


const App = () => {
  return (
    <div className='title'>
      {/* <H1>hello navaaaami</H1>
      <Form>
        <Input type="text" placeholder='enter username' />
        <Button>View more</Button>
      </Form>
      <CssInJs /> */}
      <ContactForm color="#111" />

    </div>
  )
}

export default App