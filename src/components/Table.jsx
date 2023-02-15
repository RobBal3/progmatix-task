import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Table = ({data, setData}) => {
    
    const [sortedNumberRange,setSortedNumberRange] = useState(false)
    const [sortedCountry, setSortedCountry] = useState(false)
    const [userName, setUserName]  = useState('')
    const navigate = useNavigate()

   



    function handleFilter(a) {
        if(a.innerText === 'numberrange') {
            let sortedArr = [...data].sort((a,b) => {
                if(sortedNumberRange) {

                    return a.numberrange - b.numberrange
                } else {
                    
                    return b.numberrange - a.numberrange
                }
            })
            
            setData(sortedArr)
            setSortedNumberRange(prev => !prev)
        } else if(a.innerText === 'country') {
            console.log(8);
            let sortedArr = [...data].sort((a,b) => {
                if(sortedCountry) {
                    return a.country.localeCompare(b.country)
                } else {
                    return b.country.localeCompare(a.country)
                }
            })
            
            setData(sortedArr)
            setSortedCountry(prev => !prev)
        } 
    }

    function handleFilterNames(a) {
        setUserName(a)
    }

    function navigateToAddUser() {
        navigate('/add-user')
    }

    
    const columns = Object.keys(data[0])
    
    return (<div>

        <input type="text" placeholder='Search' value={userName} onChange={e => handleFilterNames(e.target.value)} />


        <table>
            <thead>
                <tr>
                    {columns.map(item => {
                        return (
                            <th onClick={(e) => handleFilter(e.target)}>{item}</th>
                        )
                    })}
                </tr>
            </thead>

                <tbody>
                        {data.map(item => {
                            return (
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{item.country}</td>
                                    <td>{item.numberrange}</td>
                                </tr>
                            )
                        })}
                </tbody>
        </table>
            <button onClick={navigateToAddUser}>Add User</button>

    </div>);
};

export default Table;
