import React from 'react'
import {MagicItem} from './MagicItem'

export const MagicItemList = (props) =>
{
  return (
    <ul>
      {props.items.map(item =>
        <MagicItem key={item.id} {...item} addItemCallback={props.addItemCallback}/>
      )}
    </ul>
  )
}
