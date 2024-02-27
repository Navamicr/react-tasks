import React, { Fragment, useState } from 'react'
import PRODUCTS from '../../product.json'
import { useLocation } from 'react-router-dom'

const Products = () => {
    let location = useLocation()
    console.log(location)
    let [products, setProducts] = useState(PRODUCTS)
    return (
        <main>
            {/* <div>
                <h1>{location.state.name}</h1>
            </div> */}
            <div className='products'>
                {/* <h1>Products</h1> */}
                {
                    products.length > 0 && products.map(product => (
                        <Fragment key={product.id}>
                            <div className="container">
                                <figure>
                                    <picture>
                                        <img src={product.image} alt={product.title} height={150} width={150} />
                                    </picture>
                                </figure>
                            </div>

                        </Fragment>
                    ))
                }
            </div>
        </main>
    )
}

export default Products