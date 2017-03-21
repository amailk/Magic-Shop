import React from 'react'


export const MagicItem = (props) =>
{
  return (
    <li>
      <h3>{props.name}</h3>
      <img src="images/{props.image}" />
      <p>{props.description}</p>
      <h4>${props.price}</h4>
      <button>Buy</button>
    </li>
  )
}
