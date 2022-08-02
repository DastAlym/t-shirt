import Categories from './components/Categories'
import Header from './components/Header'
import Sort from './components/Sort'
import './scss/app.scss'

import TshirtBlock from './components/TshirtBlock'
import { useEffect, useState } from 'react'
const App = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		fetch('https://62e9292201787ec712127f67.mockapi.io/shirts')
			.then(res => res.json())
			.then(data => setProducts(data))
	}, [])

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Сhoose</h2>
					<div className='content__items'>
						{products.map(product => (
							<TshirtBlock key={product.id} {...product} />
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
