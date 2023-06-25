import React from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { Text, Link, Button, Heading } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { selectIsLoggedIn } from '../../redux/auth/selectors'

const Home = () => {
	const isLoggedIn = useSelector(selectIsLoggedIn)

	return (
		<>
			{isLoggedIn ? (
				<>
					<Heading mb="10px">Welcome!</Heading>
					<Button colorScheme="blue" as={RouteLink} to="/contacts">
						Add Contacts
					</Button>
				</>
			) : (
				<Text>
					<Link as={RouteLink} to="/login" color="#2b6cb0">
						login
					</Link>{' '}
					or{' '}
					<Link as={RouteLink} to="/register" color="#2b6cb0">
						Register
					</Link>{' '}
					to add contacts
				</Text>
			)}
		</>
	)
}

export default Home
