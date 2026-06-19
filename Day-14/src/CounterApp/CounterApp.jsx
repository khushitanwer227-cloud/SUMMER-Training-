import React ,{ useState } from 'react'
import './CounterApp.css'

const CounterApp = () => {
    const [count,setCount] = useState(0)
  return (
    <div>
        <div className="counter_container">
            <h1>Counter App</h1>

            <div className="count_display">{count}</div>
            {/*button*/}
            <div className='button-group'>
                <button onClick={()=> setCount(count -1)} className='btn decrement'> - </button>
                <button onClick={()=>setCount(0)}  className='btn reset'>RESET</button>
                <button onClick={()=> setCount(count +1)} className='btn increment'> + </button>
            </div>
        </div>
    </div>
  )
}

export default CounterApp