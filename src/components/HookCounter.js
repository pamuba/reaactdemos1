// this.state.count, this.setState, this.state(ctr), this.increment

import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(10)
    return (
        <div>
            <button onClick={()=> setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default HookCounter
