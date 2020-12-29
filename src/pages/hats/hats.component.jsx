import React, { Component } from 'react'
import FullCategory from '../../components/full-category/full-category.component'
import SHOP_DATA from '../shop/shop.data'

export default class HatsPage extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      collections: SHOP_DATA
    }
  }
  

  render() {
    const {collections} = this.state
    const hats = collections.filter(item => item.title === 'Hats')
    return (
      <div className='shop-page'>
        {
          hats.map(({id, ...otherCollectionProps}) => (
            <>
              <FullCategory key={id} {...otherCollectionProps} />
            </>
          ))
        }
      </div>
    )
  }
}
