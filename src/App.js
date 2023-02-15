import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Table from './components/Table';
import AddUser from './components/AddUser';

function App() {
    const [data, setData] = useState([{}]);

    useEffect(() => {
        fetch('./data.json')
            .then((res) => res.json())
            .then((data) => {

                setData(data)
            });
    }, []);

    return (
        <div className='App'>
            <Routes>
                <Route path='/' element={<Table data={data} setData={setData} />} />
                <Route path='/add-user' element={<AddUser setData={setData} />} />
            </Routes>
        </div>
    );
}

export default App;
