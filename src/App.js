import React, {useEffect, useState} from 'react';
import NameItem from './components/NameItem';
import './App.css';

function App() {

const [activeName, setActiveName] = useState('');

useEffect(() =>{
    console.log("we gaan beginnen :)")
},[])

    return (
        <>
            <h1>De actieve naam is: {activeName}  </h1>
            <ul>
                <NameItem name="Henk" activeName={activeName} setActiveName={setActiveName} />
                <NameItem name="Piet" activeName={activeName} setActiveName={setActiveName} />
                <NameItem name="Jan"  activeName={activeName} setActiveName={setActiveName} />
            </ul>
        </>
    );
}

export default App;



//uitwerking NOVA

// import React, { useState, useEffect } from 'react';
// import NameItem from './components/NameItem';
// import './App.css';
//
// function App() {
//     const [activeName, setActiveName] = useState('');
//
//     useEffect(() => {
//         console.log("We gaan beginnen!");
//     }, [])
//
//     return (
//         <>
//             <h1>De actieve naam is: {activeName}</h1>
//             <ul>
//                 <NameItem name="Henk" activeName={activeName} setActiveName={setActiveName} />
//                 <NameItem name="Piet" activeName={activeName} setActiveName={setActiveName} />
//                 <NameItem name="Jan" activeName={activeName} setActiveName={setActiveName} />
//             </ul>
//         </>
//     );
// }
//
// export default App;