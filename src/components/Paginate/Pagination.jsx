import ReactPaginate from 'react-paginate'
import style from './Pagination.module.scss'
const Pagination = ({ onChangePage }) => {
	return (
		<div className={style.paginateWrapper}>
			<ReactPaginate
				breakLabel='...'
				nextLabel=' >'
				onPageChange={event => onChangePage(event.selected + 1)}
				pageRangeDisplayed={5}
				pageCount={3}
				previousLabel='< '
				renderOnZeroPageCount={null}
			/>
		</div>
	)
}

export default Pagination
