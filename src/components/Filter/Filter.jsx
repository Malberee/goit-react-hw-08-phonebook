import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { selectFilter } from '../../redux/filter/selectors'
import { setFilter } from '../../redux/filter/slice'
import { Input, Text } from '@chakra-ui/react'

const Filter = () => {
	const filter = useSelector(selectFilter)

	const dispatch = useDispatch()

	const onFilterChange = ({ target }) => dispatch(setFilter(target.value))

	return (
		<>
			<Text>Find contacts by name</Text>
			<Input
				type="text"
				name="filter"
				title=""
				value={filter}
				onChange={onFilterChange}
				mb="15px"
				w="100%"
			/>
		</>
	)
}

export default Filter
