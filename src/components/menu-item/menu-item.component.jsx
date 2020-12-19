import React from 'react'
import './menu-items.styles.scss'

function MenuItem({title, imageUrl, price}) {
  return (
    <div className="wrapper">
      <div style={{backgroundImage: `url(${imageUrl})`}} className="menu-item"></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">N{price}</span>
      </div>
    </div>
  )
}

export default MenuItem
