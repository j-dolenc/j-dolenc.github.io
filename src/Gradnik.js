import React, {useState} from 'react';

function Gradnik(props) {
    const [count,setCount] = useState(2);

    function handleClick(change){
        setCount(change(count));
        console.log(props);
    }

    return (
        <div>
            <div >
                <button onClick={()=>handleClick(props.dolf)}>{props.dol}</button>
                <button onClick={()=>handleClick(props.gorf)}>{props.gor}</button>
                <p>{count}</p>
            </div>

        </div>

    );
}



export default Gradnik;

