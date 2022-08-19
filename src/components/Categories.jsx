const Categories = ({ value, onChangeCategory }) => {
	const categorys = ['All', "Men's", 'Female', 'Childish', 'Box', 'Accessories']

	return (
		<div className='categories'>
			<ul>
				{categorys.map((category, index) => (
					<li
						key={category}
						onClick={() => onChangeCategory(index)}
						className={value === index ? 'active' : ''}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	)
}
export default Categories
