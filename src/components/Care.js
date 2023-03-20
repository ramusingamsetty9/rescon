import React from 'react'

function Care() {
  return ( <
    center > <
    >
    <
    div className = "contact_info" >
    <
    div className = "container-fuild" >
    <
    div className = "row" >
    <
    div className = "col-lg-10 offset-lg-l" > {
      /* phone number */
    } <
    div className = "contact_info_item d-flex justify-content-start align-items-center" >

    <
    div className = "contact_info_content" >
    <
    div className = "contact_info_title" >
    Phone:
    <
    /div> <
    div className = "contact_info_text" >
    +91 7097162999 <
    /div> < /
    div > <
    /div>

    {
      /* email number */
    } <
    div className = "contact_info_item d-flex justify-content-start align-items-center" >

    <
    div className = "contact_info_content" >
    <
    div className = "contact_info_title" >
    Email:
    <
    /div> <
    div className = "contact_info_text" >
    Support @easyspace.co.in <
    /div> < /
    div > <
    /div>

    {
      /* address number */
    } <
    div className = "contact_info_item d-flex justify-content-start align-items-center" >

    <
    div className = "contact_info_content" >
    <
    div className = "contact_info_title" >
    Address:
    <
    /div> <
    div className = "contact_info_text" >
    Vijayawada, Krishna, India <
    /div> < /
    div > <
    /div> < /
    div > <
    /div> < /
    div >

    {
      /*contact form */
    } <
    div className = "contact_form" >
    <
    div className = "container" >
    <
    div className = "row" >
    <
    div className = "col-lg-10 offset-lg-l" >
    <
    div className = "contact_form_container py-5" >
    <
    div className = "contact_form_title" >
    Get in Touch <
    /div> <
    form id = "contat_form" >
    <
    div className = "contact_form_name d-flex justify-content-between align-item" >
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
    placeholder = "meassage"
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
    /div>

    <
    /div>

    <
    /div>

    <
    /div>

    <
    /div> < /
    div > <
    /> <
    /center>
  )

}
export default Care