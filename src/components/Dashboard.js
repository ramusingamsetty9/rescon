import React from 'react'
import './Dashboard.css'

function Dashboard() {
  return ( <
    >
    <
    center >
    <
    h1 > Dashboard < /h1> <
    h2 > Welcome User, < /h2> < /
    center >
    <
    p > Thanks you
    for signing in ,
    for requesting a call - back about your intrestes please do fill the below form to know more the property < /p> <
    form id = "contat_form" >
    <
    div className = "contact_form_name d-flex justify-content-between align-ite" >
    <
    input type = "text"
    id = "contact_form_name"
    className = "contact_form_name input_field"
    placeholder = "Your name"
    required = "true" / >

    <
    input type = "email"
    id = "contact_form_email"
    className = "contact_form_email input_field"
    placeholder = "Your Email"
    required = "true" / >

    <
    input type = "number"
    id = "contact_form_number"
    className = "contact_form_number input_field"
    placeholder = "Your phone number"
    required = "true" / >
    <
    /div> <
    div className = "contact_form_text" >
    <
    textarea className = "text_field contact_from_message"
    placeholder = "Your intrested property images"
    cols = "30"
    rows = "10" > < /textarea> < /
    div > <
    div className = "contact_form_button" >
    <
    button type = "submit"
    className = "button contact_submit_button" >
    Send message <
    /button>

    <
    /div> < /
    form >
    <
    />
  )

}
export default Dashboard