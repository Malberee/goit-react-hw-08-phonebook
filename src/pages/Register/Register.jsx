import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link as RouteLink } from 'react-router-dom'
import { register } from '../../redux/auth/operations'
import {
	VStack,
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
} from '@chakra-ui/react'
import {
	ViewIcon,
	ViewOffIcon,
	EmailIcon,
	LockIcon,
	AtSignIcon,
} from '@chakra-ui/icons'

const Register = () => {
	const dispatch = useDispatch()

	const [isShowPassword, setIsShowPassword] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleChange = ({ target: { name, value } }) => {
		switch (name) {
			case 'name':
				setName(value)
				break
			case 'email':
				setEmail(value)
				break
			case 'password':
				setPassword(value)
				break
			default:
				break
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		dispatch(register({ name, email, password }))
		setName('')
		setEmail('')
		setPassword('')
		e.currentTarget.reset()
	}

	const handleToggleShowPassword = () => setIsShowPassword(!isShowPassword)

	return (
		<VStack
			spacing="15px"
			display="flex"
			justifyContent="center"
			h="100vw"
		>
			<Heading>Sign Up</Heading>

			
			
			<FormControl onSubmit={handleSubmit} as="form" w="350px">
				<InputGroup>
					<InputLeftElement>
						<AtSignIcon color="gray.400" />
					</InputLeftElement>
					<Input placeholder="Name" name="name" onChange={handleChange} />
				</InputGroup>

				<InputGroup mt="15px">
					<InputLeftElement>
						<EmailIcon color="gray.400" />
					</InputLeftElement>
					<Input
						placeholder="E-mail address"
						name="email"
						type="email"
						onChange={handleChange}
					/>
				</InputGroup>

				<InputGroup mt="15px">
					<InputLeftElement>
						<LockIcon color="gray.400" />
					</InputLeftElement>
					<Input
						placeholder="Password"
						type={isShowPassword ? 'text' : 'password'}
						name="password"
						onChange={handleChange}
					/>
					<InputRightElement>
						<IconButton
							variant="unstyled"
							aria-label="Show/Hide password"
							icon={
								isShowPassword ? (
									<ViewIcon color="gray.400" />
								) : (
									<ViewOffIcon color="gray.400" />
								)
							}
							onClick={handleToggleShowPassword}
						/>
					</InputRightElement>
				</InputGroup>
				<Button w="100%" colorScheme="blue" mt="15px" type="submit">
					Submit
				</Button>
			</FormControl>
			<Text textAlign="right">
				Already have account?{' '}
				<Link to="/login" as={RouteLink} color="#2b6cb0">
					Log In
				</Link>
			</Text>
		</VStack>
	)
}

export default Register
