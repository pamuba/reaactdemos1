import React, {useEffect, useState} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    //componentDiMount + componentDidUpdate
    useEffect(()=>{
        document.title = `Clicked ${count} times`
        console.log('useEffect - Updating the document title')
    },[count])
    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count + 1)}>
                Click {count} times
            </button>
        </>
    )
}

export default HookCounterOne
