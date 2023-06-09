import { useEffect } from "react";
import { useState } from "react";
import ToyCards from "./Toycards";


const Toys = () => {
    const [toy, setToy] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/toy")
        .then(res => res.json())
        .then(data => setToy(data))
        .catch(error => console.error(error))
    },[])
    return (
        <div>
            {
                toy.map(singleToy => <ToyCards
                key={singleToy._id} singleToy={singleToy}>
                </ToyCards>)
            }
        </div>
    );
};

export default Toys;