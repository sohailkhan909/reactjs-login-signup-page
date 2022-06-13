import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Sign_Img from "./Sign_Img";

const Login = () => {
    const [inputValue, setinputValue] = useState({
        email:"",
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
          
            const getUserArr = localStorage.getItem("usersohail")
            console.log(getUserArr);


          const {email, password} = inputValue;
    
          if (!email.includes("@")) {
            alert("Please enter Correct Email")
          }else if(password.length < 5){
            alert("plese enter 5 more than chareter")
          }else{
            if (getUserArr && getUserArr.length) {
                const userdata = JSON.parse(getUserArr)
                const userLogin = userdata.filter((ele, indexNum)=>{
                    return ele.email === email && ele.password === password
                })
                if (userLogin.length === 0) {
                    alert("Invalid Details")
                }else{
                    console.log("User Login Successfully");
                }
            }
          }
        };
    
  return (
    <>
    {/* signup ===> firstname, lastname, email, password, mobile no. */}
       {/* login ==>email/ mobileno. , password */}
       
       <div className="container mt-3">
         <section className="d-flex justify-content-between">
           <div className="left_data p-5" style={{width:"100%"}}>
             <h3 className="text-center col-lg-6">Login</h3>
             <Form>
               <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                 <Form.Control type="email" name="email" onChange={getData} placeholder="Enter Email" />  
               </Form.Group>
 
 
               <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                 <Form.Control type="password" name="password" onChange={getData} placeholder="Password" />
               </Form.Group>

               <Button variant="primary col-lg-6" onClick={addData} type="submit" style={{background:"#6ab04c"}}>
                 Submit
               </Button>
             </Form>
             {/* <p className="mt-3">Already Have u Account <span>Login</span></p> */}
           </div>
             <Sign_Img/>
         </section>
       </div>
     </>
  )
}

export default Login