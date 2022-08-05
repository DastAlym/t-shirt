import React from 'react'
import ContentLoader from 'react-content-loader'

const ShirtSkeleton = props => (
	<ContentLoader
		speed={2}
		width={260}
		height={460}
		viewBox='0 0 260 460'
		backgroundColor='#e9e9e9'
		foregroundColor='#ecebeb'
		{...props}
	>
		<rect x='365' y='116' rx='0' ry='0' width='1' height='31' />
		<rect x='105' y='67' rx='0' ry='0' width='0' height='1' />
		<rect x='222' y='110' rx='0' ry='0' width='0' height='1' />
		<rect x='401' y='110' rx='0' ry='0' width='25' height='8' />
		<rect x='0' y='0' rx='0' ry='0' width='260' height='260' />
		<rect x='40' y='278' rx='0' ry='0' width='188' height='26' />
		<rect x='8' y='316' rx='0' ry='0' width='260' height='30' />
		<rect x='10' y='366' rx='0' ry='0' width='79' height='30' />
		<rect x='96' y='366' rx='0' ry='0' width='79' height='30' />
		<rect x='182' y='366' rx='0' ry='0' width='79' height='30' />
		<rect x='107' y='407' rx='30' ry='30' width='150' height='44' />
		<rect x='11' y='415' rx='0' ry='0' width='90' height='30' />
	</ContentLoader>
)

export default ShirtSkeleton
