import { useState } from 'react'
const Categories = () => {
	const [categoryName, setCategoryName] = useState([
		'All',
		"Men 's",
		'Female',
		'Childish',
		'Box',
		'Accessories',
	])
	const [activeCategory, setActiveCategory] = useState('All')
	const changeActiveCategory = category => {
		setActiveCategory(category)
	}
	return (
		<div className='categories'>
			<ul>
				{categoryName.map(category => (
					<li
						key={category}
						onClick={() => changeActiveCategory(category)}
						className={activeCategory === category ? 'active' : ''}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Categories
