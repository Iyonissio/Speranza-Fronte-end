import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AddProducts = () => {

    const navigate = useNavigate();
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    const addNewForm = async () => {
       
        let formField = new FormData()

        formField.append('name',name)
        formField.append('email',email)
        formField.append('address',address)
        formField.append('phone',phone)

        await axios({
          method: 'post',
          url:'http://localhost:8000/api/',
          data: formField
        }).then(response=>{
          console.log(response.data);
          navigate('/')
        })
    }
   

    return (
        <div className="container">
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
            <h2 className="text-center mb-4">Add Formulario</h2>

            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            <div className="form-group">
                <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your address Name"
                name="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <button className="btn btn-primary btn-block" onClick={addNewForm }>
                 Submeter Formulario
            </button>
            </div>
        </div>
        </div>
  );
};

export default AddProducts;
