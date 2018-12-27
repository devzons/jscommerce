import Link from 'next/link'
import {Item} from 'semantic-ui-react'

const mapProductsToItems = products => products.map(({id, name, image, description, meta}) => {
  return {
    childKey: id,
    image: (
      <LInk href={`/product?id=${id}` passHref}>
        <Item.Image size="small" src={image} as='a' />
      </Link>
    ),
    header:(
      <LInk href={`/product?id=${id}` passHref}>
        <Item.Header as='a'>{name}</Item.Header>
      </Lnk>
    )
  }
})

export default ({products}) => (
  <Item.Group 
    items={mapProductsToItems(products)} 
  />
)