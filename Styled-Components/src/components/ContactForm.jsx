import React from 'react'
import Styled from 'styled-components'

const Section = Styled.section`
width:100%;
height:100vh;
`;

const Article = Styled.article`
width:90%;
height:inherit;
margin:0 auto;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`;

const H1 = Styled.h1`
padding:10px;
color:#009688;
font-size:28px;
text-transform:uppercase;
font-weight:400;
letter-spacing:1.6px;
font-style:revert-layer;
`;

const Main = Styled.main`
background:white;
width:400px;
height:auto;
padding:10px;
border:1px solid #0096882e;

`;

const Div = Styled.div`
margin:10px 0;

`;

const Label = Styled.label`
width:100%;
display:block;
padding:5px 0;
font-size:14px;
font-weight:500;
`;

const Input = Styled.input`
width:94%;
padding:10px;
margin:10px 0;
border:1px solid #ccc;
border-radius:5px;
`;

const Button = Styled.button`
border:1px solid #607D8B;
width:100%;
padding:10px;
border-radius:5px;
color:#fff;
background:#009688;
font-size:16px;
text-transform:uppercase;
font-weight:500;
margin:10px 0;
cursor:pointer;
&:hover{
    background:${({ background }) => background === "#111" ? "red" : "blue"};
}
`;
const ContactForm = ({ color }) => {
    return (
        <Section>
            <Article>
                <header>
                    <H1>Contact Form</H1>
                </header>

                <Main>
                    <Div className="form-group">
                        <Label htmlFor='email'>Email</Label>
                        <Input type="text" placeholder='enter email' />
                    </Div>

                    <Div className="form-group">
                        <Label htmlFor='password'>Password</Label>
                        <Input type="password" placeholder='enter password' />
                    </Div>

                    <Div className="form-group">
                        <Button background='#111'>Submit</Button>
                    </Div>
                </Main>
            </Article>
        </Section>
    )
}

export default ContactForm