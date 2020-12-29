import React, { Component } from 'react'
import FullCategory from '../../components/full-category/full-category.component'
import SHOP_DATA from '../shop/shop.data'

export default class WomensPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      collections: SHOP_DATA
    }
  }
  

  render() {
    const {collections} = this.state
    const womens = collections.filter(item => item.title === 'Womens')
    return (
      <div className='shop-page'>
        {
          womens.map(({id, ...otherCollectionProps}) => (
            <>
              <FullCategory key={id} {...otherCollectionProps} />
            </>
          ))
        }
      </div>
    )
  }
}
