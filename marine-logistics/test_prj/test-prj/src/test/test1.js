import React,{useState} from 'react'




const Show = (props)=>{
    return (
        <>
        <h2>{props.data}</h2>
        </>
    )
} 


const Test1 = (props) => {
    const [test, setTest] = useState(0);

    return (
        <>
        <button onClick={()=>{setTest(test + 1)}}>inc_cnt </button>
        <button onClick={()=>{setTest(test - 1)}}>des_cnt </button>
        {console.log(test)}
        <Show data={test}></Show>
        <h1>test111111111111111</h1>
        </>
    )
}

export default Test1