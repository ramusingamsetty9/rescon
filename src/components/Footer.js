import React from "react";
import '../cssfiles/home.css';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPhoneAlt,
  FaMailBulk
} from 'react-icons/fa';
const Footer = () => {
  return ( <
    center > <
    Box >

    <
    Container >
    <
    Row >
    <
    Column >
    <
    Heading > About Us < /Heading> <
    FooterLink href = "/About" > Our Aim < /FooterLink>  <
    FooterLink href = "#" > < /FooterLink> < /
    Column > <
    Column >
    <
    Heading > Quick Links < /Heading> <
    FooterLink href = "/About" > Terms and policy < /FooterLink> <
    FooterLink href = "/About" > FAQS < /FooterLink> < /
    Column > <
    Column >
    <
    Heading > Contact Us < /Heading> <
    h3 style = {
      {
        color: "white",
        textAlign: "center",
        fontSize: "15.3px",
        marginTop: "0px"
      }
    } >
    <
    FaPhoneAlt / > Contact: 7097162999 < /h3> <
    h3 style = {
      {
        color: "white",
        fontSize: "14.3px",
        marginTop: "0px"
      }
    } >
    <
    FaMailBulk / > E - Mail: easyspace279 @gmail.com < /h3> <
    h3 style = {
      {
        color: "white",
        textAlign: "center",
        fontSize: "15.3px",
        marginTop: "0px"
      }
    } >

    <
    /h3> < /
    Column > <
    Column >
    <
    Heading > Social Media < /Heading> <
    FooterLink href = "https://www.facebook.com/Easy-space-101833392352583/?ref=pages_you_manage" >
    <
    i className = "fab fa-facebook-f" >
    <
    span style = {
      {
        marginLeft: "10px"
      }
    } >
    <
    FaFacebook / > Facebook <
    /span> < /
    i > <
    /FooterLink> <
    FooterLink href = "https://www.instagram.com/easy._.space/" >
    <
    i className = "fab fa-instagram" >
    <
    span style = {
      {
        marginLeft: "10px"
      }
    } >
    <
    FaInstagram / > Instagram <
    /span> < /
    i > <
    /FooterLink> <
    FooterLink href = "https://twitter.com/home" >
    <
    i className = "FaFacebook" >
    <
    span style = {
      {
        marginLeft: "10px"
      }
    } >
    <
    FaTwitter / > Twitter <
    /span> < /
    i > <
    /FooterLink>  < /
    Column > <
    /Row> < /
    Container > <
    h4 style = {
      {
        color: "white",
        textAlign: "center",
        marginTop: "0px",
        background: "transperent"
      }
    } >
    Easy Space @2021 ALL RIGHTS RESERVED < /h4> < /
    Box >
    <
    /center>
  );
};
export default Footer;