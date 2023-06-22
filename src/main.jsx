import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import store from './redux/store'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/react'
import App from './components/App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter basename='/goit-react-hw-08-phonebook/' >
			<ChakraProvider>
				<Provider store={store}>
						<App />
				</Provider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
)
