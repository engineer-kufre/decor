import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import SHOP_DATA from './shop.data';
import './shop.styles.scss'

export class ShopPage extends Component {
  constructor(props){
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }
  render() {
    const {collections} = this.state
    return (
      <div className='shop-page'>
        {
          collections.map(({id, ...otherCollectionProps}) => (
            <>
              <CollectionPreview key={id} {...otherCollectionProps} />
              <Link className="more" to={`/${otherCollectionProps.title}`}>MORE</Link>
            </>
          ))
        }
      </div>
    )
  }
}

export default ShopPage
