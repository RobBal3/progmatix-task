import React, { useState } from 'react'
import { addToDB } from '../utils/addDB'


const AddUser = ({setData}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [country, setCountry] = useState('')
    const [numberrange, setNumberrange] = useState('')
    

    function adduser() {
        addToDB({name, phone, email, country, numberrange})
        

        // setData(prev => {
        //   return  [...prev, {name, phone, email, country, numberrange}]
        // })
    }

  return (
    <div style={{display:'flex', flexDirection:'column'}} >
        <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder='name'/>
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder='phone' />
        <input type="text" value={email} onChange={e => setEmail(e.target.value)}  placeholder='email'/>
        <input type="text" value={country} onChange={e => setCountry(e.target.value)} placeholder='country' />
        <input type="text" value={numberrange} onChange={e => setNumberrange(e.target.value)} placeholder='numberrange' />

        <button onClick={adduser}>Add</button>
    </div>
  )
}

export default AddUser