import React from "react"
import {useState, useEffect} from 'react'
import axios from "axios"
const BASE_URL = 'http://localhost:3001/api'

const NewVolunteer = (props) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [addVolunteer, setAddVolunteer] = useState(false)

    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const createVolunteer = async () => {
        await axios.post(`${BASE_URL}/volunteer/`, {
            name: name,
            phone: phone,
            email: email
        })
        .then(function (respose) {
            setAddVolunteer(true);
            console.log(respose)
        })
        .catch(function (error) {
            console.log(error)
        })
    }

    useEffect(() => {
        return () => {
            setAddVolunteer(false)
        }
    }, [addVolunteer])

    return(
        <div>
            <input
                type='text'
                name='name'
                required='required'
                placeholder="Enter your name"
                onChange={(e) => handleName(e, 'num')}
                />
            <input
                type='text'
                name='phone'
                required='required'
                placeholder="Enter your phone number"
                onChange={(e) => handlePhone(e, 'num')}
                />
            <input
                type='email'
                name='email'
                required='required'
                placeholder="Enter your email"
                onChange={(e) => handleEmail(e, 'num')}
                />
            <button className="submit-button" type='submit' onClick={() => createVolunteer()}>Add</button>
        </div>
    )
}

export default NewVolunteer