import React from 'react'
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss'

export class Directory extends React.Component {
  constructor(){
    super();

    this.state = {
      sections: [{
        title: 'Kitchen Set',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/c86BpTx/pexels-mark-mccammon-1080721.jpg',
        id: 1,
        linkUrl: 'chairs'
      },
      {
        title: 'Bedroom Set',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/ZxQWC3y/pexels-pixabay-262048.jpg',
        id: 2,
        linkUrl: 'bedroom'
      },
      {
        title: 'Office Furniture',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/bKcn2b6/pexels-pixabay-276583.jpg',
        id: 3,
        linkUrl: 'office'
      },
      {
        title: 'Waiting Room',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/df3YYSD/pexels-pixabay-271805.jpg',
        id: 4,
        linkUrl: 'reception'
      },
      {
        title: 'Outdoor Furniture',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/bKPWNMQ/pexels-maria-salazar-879010.jpg',
        id: 5,
        linkUrl: 'outdoor'
      },
      {
        title: 'Living Room',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/cJv38HV/pexels-vecislavas-popa-1571468.jpg',
        id: 6,
        linkUrl: 'parlor'
      },
      {
        title: 'Kitchen Set',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/9qwRntJ/pexels-pixabay-534151.jpg',
        id: 7,
        linkUrl: 'kitchen'
      },
      {
        title: 'Outdoor Furniture',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/yd8D8DF/pexels-marianne-238377.jpg',
        id: 8,
        linkUrl: 'outdoor'
      },
      {
        title: 'Fireplace',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/KWj1Nhg/pexels-victoria-borodinova-1648771.jpg',
        id: 9,
        linkUrl: 'fireplace'
      },
      {
        title: 'Living Room',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/nCtZQFv/pexels-pixabay-259580.jpg',
        id: 10,
        linkUrl: 'parlor'
      },
      {
        title: 'Living Room',
        price: '2,500.00',
        imageUrl: 'https://i.ibb.co/qWxnB0V/pexels-vecislavas-popa-1668860.jpg',
        id: 11,
        linkUrl: 'parlor'
      }]
    }
  }

  render() {
    return (
      <div className="directory-menu">
        {
          this.state.sections.map(({id, ...otherSectionProps}) => (
            <MenuItem key={id} {...otherSectionProps} />
          ))
        }
      </div>
    )
  }
}

export default Directory
