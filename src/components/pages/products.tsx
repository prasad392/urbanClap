import React from 'react'

import Navbar from '../navbar/Navbar'
import Usercard from '../cards/usercard'

interface Props {}

function Products(props: Props) {
    const {} = props

    return (
        <>
            <Navbar/>
            <div> Products </div>
            <Usercard/>
        </>
    )
}

export default Products
