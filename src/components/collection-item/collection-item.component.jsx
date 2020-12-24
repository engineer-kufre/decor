import React from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({id, name, price, imageUrl}) => {
  return (
    <div className="collection-item-wrapper">
      <div style={{backgroundImage: `url(${imageUrl})`}} className="collection-item"></div>
      <div className="collection-item-content">
        <h1 className="collection-item-title">{name}</h1>
        <span className="collection-item-subtitle">N{price}</span>
      </div>
    </div>
  )
}

export default CollectionItem
