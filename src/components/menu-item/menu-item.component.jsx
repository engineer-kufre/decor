import React from 'react'
import {withRouter} from 'react-router-dom'

import './menu-items.styles.scss'

function MenuItem({title, imageUrl, price, history, linkUrl, match}) {
  return (
    <div className="wrapper" onClick={() => history.push(`${match.url}${linkUrl}`)}>
      <div style={{backgroundImage: `url(${imageUrl})`}} className="menu-item"></div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">N{price}</span>
      </div>
    </div>
  )
}

export default withRouter(MenuItem)
