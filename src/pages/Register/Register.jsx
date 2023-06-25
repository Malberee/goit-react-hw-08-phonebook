import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link as RouteLink } from 'react-router-dom'
import { register } from '../../redux/auth/operations'
import {
	Box,
	Heading,
	InputGroup,
	Input,
	FormLabel,
	FormErrorMessage,
	InputRightElement,
	InputLeftElement,
	IconButton,
	FormControl,
	Button,
	Text,
	Link,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import {
	ViewIcon,
	ViewOffIcon,
	EmailIcon,
	LockIcon,
	AtSignIcon,
} from '@chakra-ui/icons'

const Register = () => {
	const dispatch = useDispatch()

	const [isVisiblePassword, setIsVisiblePassword] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			password: '',
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Name required').min(3, 'Name is too short'),
			email: Yup.string().email().required('Email required'),
			password: Yup.string()
				.required('Password required')
				.min(8, 'Password is too short'),
		}),
		onSubmit: (values, actions) => {
			try {
				dispatch(register(values))
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
			h="container.md"
			onSubmit={formik.handleSubmit}
		>
			<Box w="300px">
				<Heading>Sign Up</Heading>

				<FormControl isInvalid={formik.errors.name && formik.touched.name}>
					<FormLabel mb="2px">Name</FormLabel>
					<InputGroup>
						<InputLeftElement>
							<AtSignIcon />
						</InputLeftElement>
						<Input
							name="name"
							placeholder="Enter name"
							{...formik.getFieldProps('name')}
						/>
					</InputGroup>
					<FormErrorMessage>{formik.errors.name}</FormErrorMessage>
				</FormControl>

				<FormControl
					isInvalid={formik.errors.email && formik.touched.email}
					mt="10px"
				>
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
					Already have account?{' '}
					<Link to="/login" as={RouteLink} color="#2b6cb0">
					Log In
					</Link>
				</Text>
			</Box>
		</Box>
	)
}

export default Register
