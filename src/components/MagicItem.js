import React from 'react'


export const MagicItem = (props) =>
{

  var handleClick = () => {
    props.addItemCallback(props.id);
  }

  return (
    <li>
      <h3>{props.name}</h3>
      <img src={"images/" + props.image} />
      <p>{props.description}</p>
      <h4>${props.price}</h4>
      <button onClick={handleClick}>Buy</button>
    </li>
  )
}
