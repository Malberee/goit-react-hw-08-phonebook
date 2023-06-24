import React from 'react'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Header from '../Header'

const SharedLayout = () => (
	<>
		<Header />
		<Suspense>
			<Outlet />
		</Suspense>
	</>
)

export default SharedLayout
