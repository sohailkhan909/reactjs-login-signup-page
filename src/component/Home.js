import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_Img from "./Sign_Img";
import { NavLink } from "react-router-dom";

const Home = () => {

  const [inputValue, setinputValue] = useState({
    firstname:"",
    lastname:"",
    email:"",
    mobile:"",
    password:""
  })

  const [data, setData] = useState([]);

console.log(inputValue);
    const getData = (e)=>{
  const {value, name} = e.target;

      setinputValue(()=>{
        return{
          ...inputValue, [name] : value
      }
      })
    }

    const addData= (e)=>{
      e.preventDefault()
      
      const {firstname, lastname, email, mobile, password} = inputValue;

       if(firstname === ""){
        alert("Please enter the Firstname")
      }else if(lastname === ""){
        alert("Please enter Last name")
      }else if (!email.includes("@")) {
        alert("Please enter Correct Email")
      }else if(mobile === ""){
        alert("Please Enter Mobile Number")
      }else if(password.length < 5){
        alert("Please Enter Your Password More than 5 Length")
      }else{
        console.log("Data Added Successfully")
          localStorage.setItem("usersohail", JSON.stringify([...data, inputValue]))
      }
    };


  return (
    <>
   {/* signup ===> firstname, lastname, email, password, mobile no. */}
      {/* login ==>email/ mobileno. , password */}
      
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data p-5" style={{width:"100%"}}>
            <h3 className="text-center col-lg-6">Sign Up</h3>
            <Form>
              

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" name="firstname" onChange={getData} placeholder="Enter Your First Name" />  
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text"  name="lastname" onChange={getData} placeholder="Enter Your Last Name" />  
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter Your Email Address" />  
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" name="mobile" onChange={getData} placeholder="Enter Your Mobile No."/>  
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getData} placeholder="Password" />
              </Form.Group>
              <Button variant="primary col-lg-6" onClick={addData} type="submit" style={{background:"#6ab04c"}}>
                Submit
              </Button>
            </Form>
            <p className="mt-3">Already Have u Account <span><NavLink to="/login">Login</NavLink></span></p>
          </div>
            <Sign_Img/>
        </section>
      </div>
    </>
  );
};

export default Home;
