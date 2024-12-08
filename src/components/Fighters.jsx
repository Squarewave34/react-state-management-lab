const Fighter = ({fighter})=>{
  return(
    <div>
      <img src={fighter.img} alt={fighter.name} />
      <h2>{fighter.name}</h2>
      <h3>Costs: {fighter.price}</h3>
      <h3>Strength: {fighter.strength}</h3>
      <h3>Agility: {fighter.agility}</h3>
    </div>
  )
}

export default Fighter