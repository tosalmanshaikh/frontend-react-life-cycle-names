import React, {useEffect} from 'react';

function NameItem({name, activeName, setActiveName  }) {

useEffect(() => {
    console.log(`${name} is in de DOM gezet`);
},[])

    useEffect(() => {
        if (activeName === name) {
            console.log(`${name} wil een beer!`);
        }
    },[activeName])

    return (
        <li>
            <h3>{name}</h3>
            <button
                type="button"
                onClick={() => setActiveName(name)}

            >
                Geef een rondje!
            </button>
        </li>
    );
}

export default NameItem;



//uitwerking NOVA


// import React, { useEffect } from 'react';
//
// function NameItem({ name, activeName, setActiveName }) {
//
//     useEffect(() => {
//         console.log(`${name} is in de DOM gezet!`);
//     }, [])
//
//     useEffect(() => {
//         if (activeName === name) {
//             console.log(`${name} wil graag een biertje bestellen.`);
//         }
//     }, [activeName])
//
//     return (
//         <li>
//             <h3>{name}</h3>
//             <button
//                 type="button"
//                 onClick={() => setActiveName(name)}
//             >
//                 Geef een rondje!
//             </button>
//         </li>
//     );
// }
//
// export default NameItem;
