import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_Img from "./Sign_Img";
import { NavLink } from "react-router-dom";

const Home = () => {

  const [inputValue, setinputValue] = useState({
    name:"",
    email:"",
    date:"",
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
      
      const {name, email, date, password} = inputValue;

      if (!email.includes("@")) {
        alert("Please enter Correct Email")
      }else if(name === ""){
        alert("Please enter name")
      } else if(date === ""){
        alert("Please enter Date")
      }else if(password.length < 5){
        alert("plese enter 5 more than chareter")
      }else{
        console.log("Data Added Successfully");
          localStorage.setItem("usersohail", JSON.stringify([...data, inputValue]))
        // console.log("data added submit succesfully");
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
                <Form.Control type="email" name="email" onChange={getData} placeholder="Enter Email" />  
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="text" onChange={getData} name="name" placeholder="Enter Your Name" />  
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control type="date" name="date" onChange={getData}/>  
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
