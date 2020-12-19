import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

export class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [{
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/c86BpTx/pexels-mark-mccammon-1080721.jpg',
        id: 1
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/ZxQWC3y/pexels-pixabay-262048.jpg',
        id: 2
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/bKcn2b6/pexels-pixabay-276583.jpg',
        id: 3
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/df3YYSD/pexels-pixabay-271805.jpg',
        id: 4
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/bKPWNMQ/pexels-maria-salazar-879010.jpg',
        id: 5
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/cJv38HV/pexels-vecislavas-popa-1571468.jpg',
        id: 6
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/9qwRntJ/pexels-pixabay-534151.jpg',
        id: 7
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/yd8D8DF/pexels-marianne-238377.jpg',
        id: 8
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/KWj1Nhg/pexels-victoria-borodinova-1648771.jpg',
        id: 9
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/nCtZQFv/pexels-pixabay-259580.jpg',
        id: 10
      },
      {
        title: 'hats',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/qWxnB0V/pexels-vecislavas-popa-1668860.jpg',
        id: 10
      }]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({title, imageUrl, id, price}) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} price={price} />
          ))
        }
      </div>
    )
  }
}

export default Directory
