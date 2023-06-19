import styled from '@emotion/styled';

export const FormInput = styled.form`
display: flex;
gap: 30px;
`
export const Input = styled.input`
padding: 15px;
border-radius:7px;
background-color: #FFFFFF;
display: block;
margin-top: 20px;
margin-left: 20px;
width: 300px;  
color: #A9A9A9;
font-size:18px;
border: 1px solid #00FFFF;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

:focus {
    outline-color: rgba(0,0,0,0);
    background: rgba(255,255,255,.95);
    color: #191970;
    border: 1px solid #0000FF;
`

export const Button = styled.button`
width: 100px;
padding: 10px;
margin-top: 20px;
border-radius: 7px;
border: 1px solid #00FFFF;
background-color: #00FFFF;
box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
  0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  color: #191970;
`