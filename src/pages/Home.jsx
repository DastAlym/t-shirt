import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categories from '../components/Categories'
import Paginate from '../components/Paginate/Pagination'
import TshirtBlock from '../components/ShirtBlock'
import ShirtSkeleton from '../components/ShirtBlock/ShirtSkeleton'
import Sort from '../components/Sort'
import { setCategoryId } from '../redux/slices/filterSlice'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'
const Home = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const categoryId = useSelector(state => state.filter.categoryId)
	const sortType = useSelector(state => state.filter.sort.sortProperty)
	const searchValue = useSelector(state => state.search.searchValue)

	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	console.log(navigate)
	useEffect(() => {
		setLoading(true)

		const category = categoryId > 0 ? `category=${categoryId}` : ''
		const order = sortType.includes('-') ? 'asc' : 'desc'
		const sortBy = sortType.replace('-', '')
		const search = searchValue ? `&search=${searchValue}` : ''
		axios
			.get(
				`https://628de099a339dfef87a24573.mockapi.io/items?page=${currentPage}&limit=5&${category}&sortBy=${sortBy}&order=${order}${search}`
			)
			.then(res => {
				setProducts(res.data)
				setLoading(false)
			})
		window.scrollTo(0, 0)
	}, [categoryId, sortType, searchValue, currentPage])
	useEffect(() => {
		const str = qs.stringify({
			sort: sortType,
			categoryId,
			currentPage,
		})
		navigate(`?${str}`)
	}, [categoryId, sortType, searchValue, currentPage])

	const changeCategory = i => {
		dispatch(setCategoryId(i))
	}

	const loadingSkeleton = [...new Array(5)].map((_, index) => (
		<ShirtSkeleton key={index} />
	))

	const productsItems = products
		.filter(item =>
			item.title
				.toLowerCase()
				.replace(/ /g, '')
				.includes(searchValue.toLowerCase().replace(/ /g, ''))
		)
		.map(product => <TshirtBlock key={product.id} {...product} />)

	return (
		<>
			<div className='content__top'>
				<Categories value={categoryId} onChangeCategory={changeCategory} />
				<Sort />
			</div>

			<h2 className='content__title'>Сhoose</h2>

			<div className='content__items'>
				{loading ? loadingSkeleton : productsItems}
			</div>
			{products.length > 4 ? (
				<Paginate onChangePage={number => setCurrentPage(number)} />
			) : null}
		</>
	)
}

export default Home
