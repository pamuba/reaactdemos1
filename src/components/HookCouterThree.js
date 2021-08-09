import React, {useState} from 'react'

function HookCouterThree() {
    const [name, setName] = useState({firstName:'', lastName:''})
    return (
        <div>
            <form>
                <input value={name.firstName} onChange={e => setName({...name, firstName:e.target.value})} type="text"/><br/>
                <input value={name.lastName} onChange={e => setName({...name, lastName:e.target.value})} type="text"/><br/>
                <h2>First Name:{name.firstName}</h2><br/>
                <h2>Last Name:{name.lastName}</h2>
                <div>{JSON.stringify(name)}</div>
            </form>
        </div>
    )
}

export default HookCouterThree
