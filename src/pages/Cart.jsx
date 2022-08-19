import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/ui/Button/Button'
import '../scss/components/_cart.scss'
const Cart = () => {
	return (
		<div className='cart-wrapper'>
			<div className='cart-header'>
				<div className='cart-header-left'>
					<svg
						width='29'
						height='29'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M6.33333 16.3333C7.06971 16.3333 7.66667 15.7364 7.66667 15C7.66667 14.2636 7.06971 13.6667 6.33333 13.6667C5.59695 13.6667 5 14.2636 5 15C5 15.7364 5.59695 16.3333 6.33333 16.3333Z'
							stroke='#3f3f3f'
							strokeWidth='1.8'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M14.3333 16.3333C15.0697 16.3333 15.6667 15.7364 15.6667 15C15.6667 14.2636 15.0697 13.6667 14.3333 13.6667C13.597 13.6667 13 14.2636 13 15C13 15.7364 13.597 16.3333 14.3333 16.3333Z'
							stroke='#3f3f3f'
							strokeWidth='1.8'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M4.78002 4.99999H16.3334L15.2134 10.5933C15.1524 10.9003 14.9854 11.176 14.7417 11.3722C14.4979 11.5684 14.1929 11.6727 13.88 11.6667H6.83335C6.50781 11.6694 6.1925 11.553 5.94689 11.3393C5.70128 11.1256 5.54233 10.8295 5.50002 10.5067L4.48669 2.82666C4.44466 2.50615 4.28764 2.21182 4.04482 1.99844C3.80201 1.78505 3.48994 1.66715 3.16669 1.66666H1.66669'
							stroke='#3f3f3f'
							strokeWidth='1.8'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<h3>Basket</h3>
				</div>
				<div className='cart-header-right'>
					<svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M2.5 5H4.16667H17.5'
							stroke='#B6B6B6'
							strokeWidth='1.2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M6.66666 4.99996V3.33329C6.66666 2.89127 6.84225 2.46734 7.15481 2.15478C7.46737 1.84222 7.8913 1.66663 8.33332 1.66663H11.6667C12.1087 1.66663 12.5326 1.84222 12.8452 2.15478C13.1577 2.46734 13.3333 2.89127 13.3333 3.33329V4.99996M15.8333 4.99996V16.6666C15.8333 17.1087 15.6577 17.5326 15.3452 17.8451C15.0326 18.1577 14.6087 18.3333 14.1667 18.3333H5.83332C5.3913 18.3333 4.96737 18.1577 4.65481 17.8451C4.34225 17.5326 4.16666 17.1087 4.16666 16.6666V4.99996H15.8333Z'
							stroke='#B6B6B6'
							strokeWidth='1.2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8.33334 9.16663V14.1666'
							stroke='#B6B6B6'
							strokeWidth='1.2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M11.6667 9.16663V14.1666'
							stroke='#B6B6B6'
							strokeWidth='1.2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<h4>Empty the trash</h4>
				</div>
			</div>
			{/* Product cart */}
			<div className='product-items'>
				<div className='product-cart'>
					<div className='product-item'>
						<img
							src='https://storage.vsemayki.ru/images/0/2/2091/2091963/previews/people_1_womens_vests_front_lightgray_500.jpg'
							alt='Product Image'
						/>
						<div>
							<p>«anime LOVELY EYES»</p>
							<span>Material cotton, xs (42).</span>
						</div>
					</div>
					<div className='product-count'>
						<div>-</div>
						<p>2</p>
						<div>+</div>
					</div>
					<div className='product-price'>
						<p>198 $</p>
						<div>x</div>
					</div>
				</div>
			</div>
			{/* Product footer */}
			<div className='product-footer'>
				<div className='product-total'>
					<div className='product-total__count'>
						<p>Total product:</p>
						<span>3 pieces.</span>
					</div>
					<div className='product-total__price'>
						<p>Order amount:</p>
						<span>833 $</span>
					</div>
				</div>
				<div className='payment-btns'>
					<Link to='/'>
						<Button
							style={{
								width: '211px',
								background: 'none',
								color: '#CACACA',
								border: '1px solid #cacaca',
								fontSize: '14px',
							}}
						>
							Go back
						</Button>
					</Link>
					<Button
						style={{ width: '211px', fontWeight: '700', fontSize: '16px' }}
					>
						Pay Now
					</Button>
				</div>
			</div>
		</div>
	)
}

export default Cart
