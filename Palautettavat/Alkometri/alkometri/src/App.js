import './App.css';
import background from './whiskey.jpg'
import { useState } from 'react';

function App() {

  //useState variables
  const [weight, setWeight] = useState(0)
  const [bottles, setBottles] = useState(0)
  const [hours, setHours] = useState(0)
  const [gender, setGender] = useState('male')
  const [result, setResult] = useState(0)


  //Creating arrays with amount of bottles & hours 
  const bottlesAmount = []
  const hoursAmount = []

  for (let i=1; i<26; i++) {
    bottlesAmount.push(i)
  }

  for (let i=1; i<13; i++) {
    hoursAmount.push(i)
  }

//Submit form event

function handleSubmit(e) {
    e.preventDefault();
    let promilles = 0;
    let litres = bottles * 0.33
    let grams = litres * 8 *4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * hours)

    if (gender === 'male') {
      promilles = gramsLeft / (weight * 0.7)
    }
    else {
      promilles = gramsLeft / (weight * 0.6)
    }

    if (promilles < 0) {
      promilles = 0
    }

    setResult(promilles)
  }

  return (
    <>
      <div className='content'>
      <h3>Calculating alcohol blood level</h3>
      <div className='calculator'>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Weight (kg): </label>
          <input name="weight" type="number" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
          </div>
          <div>
          <label>Bottles (0.33l): </label>
          <select name="bottles" id="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
          {bottlesAmount.map(bottle => <option>{bottle}</option>)}
          </select>
        </div>
        <div>
        <label>Hours: </label>
          <select name="hours" id="hours" value={hours} onChange={e => setHours(e.target.value)}>
          {hoursAmount.map(hour => <option>{hour}</option>)}
          </select>
        </div>
        <div>
          <label>Gender</label>
          <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)} /><label>Male</label>
          <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)} /><label>Female</label>
      
        </div>

        <button className='button'>Calculate</button>
        <div>
          <label>Result: </label>
          <output>{result.toFixed(2)}</output>
        </div>


      </form>
      </div>
      <div className='imageholder' style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover'
                                          
      }}>
      </div>
      </div>
    </>
  )

}

export default App;
