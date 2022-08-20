import {useState } from 'react';
import Child from './components/Child'

function App(){
  const [date, setDate] = useState("")
  return <>
    <h1>Optimization!</h1>
    <input
      type="date"
      value={date}
      onChange = {e => setDate(e.target.value)}
    />
    <p>You've chosen - {date}</p>
    <Child count={0} />
  </>
}
export default App