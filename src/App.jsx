import './App.css'
import { useState } from 'react'
import Fighter from './components/fighters'

const App = () => {
  const [team, setTeam]= useState([])
  const [money, setMoney] = useState(100)
  const [totalStrength, setTotalStrength] = useState(0)
  const [totalAgility, setTotalAgility] = useState(0)
  const [zombieFighters]= useState([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ])

  const strength =(newTeam)=>{
    let total=0
    newTeam.forEach((member)=>{
      total+=member.strength
    })
    setTotalStrength(total)
  }

  const agility =(newTeam)=>{
    let total=0
    newTeam.forEach((member)=>{
      total+=member.agility
    })
    setTotalAgility(total)
  }

  const addFighter = (fighter)=>{
    const newTeam = [...team, fighter]
    const newMoney = money-fighter.price
    setTeam(newTeam)
    if(newMoney>0){
      setMoney(newMoney)
    }else{
      console.log("not enough money");
    }
    strength(newTeam)
    agility(newTeam)
  }

  const deleteFighter = (fighter)=>{
    const newMoney = money+fighter.price
    const newTeam = team.filter((member)=>{
      return member.name != fighter.name
    })
    setTeam(newTeam)
    setMoney(newMoney)
    strength(newTeam)
    agility(newTeam)
  }

  return (
    <div>
      <h2>Money: {money}</h2>
      <h2>total strength: {totalStrength}</h2>
      <h2>total agility: {totalAgility}</h2>

      {team.length<=0 ? 'add members':
      <div>
        <h2>members:</h2>
        <ul>
        {team.map((fighter)=>(
          <li>
            <Fighter fighter={fighter} />
            <button onClick={()=>{deleteFighter(fighter)}}>delete</button>
          </li>
        ))}
      </ul>
      </div>
      }
      <h2>All fighters</h2>
      <ul>
        {zombieFighters.map((fighter)=>(
          <li>
            <Fighter fighter={fighter} />
            <button onClick={()=>{addFighter(fighter)}}>Add</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App