import { useState } from 'react'
import { Link as RouteLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/operations'
import {
	Box,
	Heading,
	InputGroup,
	Input,
	InputRightElement,
	InputLeftElement,
	IconButton,
	FormControl,
	Button,
	Text,
	Link,
	FormErrorMessage,
	FormLabel,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ViewIcon, ViewOffIcon, EmailIcon, LockIcon } from '@chakra-ui/icons'

const Login = () => {
	const dispatch = useDispatch()

	const [isVisiblePassword, setIsVisiblePassword] = useState(false)

	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().email().required('Email required'),
			password: Yup.string()
				.required('Password required')
				.min(8, 'Password is too short'),
		}),
		onSubmit: (values, actions) => {
			try {
				dispatch(login(values))
			} catch (err) {
				console.log('text')
			}
			actions.resetForm()
		},
	})

	const toggleVisiblePassword = () => setIsVisiblePassword(!isVisiblePassword)

	return (
		<Box
			as="form"
			display="flex"
			justifyContent="center"
			alignItems="center"
			h="100%"
			onSubmit={formik.handleSubmit}
		>
			<Box w="300px">
				<Heading>Log In</Heading>

				<FormControl isInvalid={formik.errors.email && formik.touched.email}>
					<FormLabel mb="2px">E-mail</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<EmailIcon />
						</InputLeftElement>
						<Input
							name="email"
							placeholder="Enter e-mail"
							{...formik.getFieldProps('email')}
						/>
					</InputGroup>
					<FormErrorMessage>{formik.errors.email}</FormErrorMessage>
				</FormControl>

				<FormControl
					mt="10px"
					isInvalid={formik.errors.password && formik.touched.password}
				>
					<FormLabel mb="2px">Password</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<LockIcon />
						</InputLeftElement>
						<Input
							name="password"
							placeholder="Enter password"
							type={isVisiblePassword ? 'text' : 'password'}
							{...formik.getFieldProps('password')}
						/>
						<InputRightElement>
							<IconButton
								variant="flushed"
								type="button"
								icon={isVisiblePassword ? <ViewIcon /> : <ViewOffIcon />}
								onClick={toggleVisiblePassword}
							/>
						</InputRightElement>
					</InputGroup>
					<FormErrorMessage>{formik.errors.password}</FormErrorMessage>
				</FormControl>

				<Button type="submit" colorScheme="blue" mt="10px" w="100%">
					Submit
				</Button>

				<Text mt="10px">
					Don't have account?{' '}
					<Link to="/register" as={RouteLink} color="#2b6cb0">
						Create account
					</Link>
				</Text>
			</Box>
		</Box>
	)
}

export default Login
