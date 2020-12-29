import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import './full-category.styles.scss'

const FullCategory = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          items
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))
        }
      </div>
    </div>
  )
}

export default FullCategory
