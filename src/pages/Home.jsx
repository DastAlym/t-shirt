import React, { useEffect, useState } from 'react'
import Categories from '../components/Categories'
import TshirtBlock from '../components/ShirtBlock'
import ShirtSkeleton from '../components/ShirtBlock/ShirtSkeleton'
import Sort from '../components/Sort'

const Home = () => {
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch('https://62e9292201787ec712127f67.mockapi.io/shirts')
			.then(res => res.json())
			.then(data => {
				setProducts(data)
				setLoading(false)
			})
	}, [])
	return (
		<>
			<div className='content__top'>
				<Categories />
				<Sort />
			</div>
			<h2 className='content__title'>Сhoose</h2>
			<div className='content__items'>
				{loading
					? [...new Array(5)].map((_, index) => <ShirtSkeleton key={index} />)
					: products.map(product => (
							<TshirtBlock key={product.id} {...product} />
					  ))}
			</div>
		</>
	)
}

export default Home
