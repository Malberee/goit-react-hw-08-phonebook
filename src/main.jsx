import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import { Provider } from 'react-redux'
import { ChakraProvider, ThemeProvider, theme } from '@chakra-ui/react'
import App from './components/App'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter basename="/goit-react-hw-08-phonebook/">
			<ChakraProvider>
				<ThemeProvider theme={theme}>
					<Provider store={store}>
						<PersistGate loading={null} persistor={persistor}>
							<App />
						</PersistGate>
					</Provider>
				</ThemeProvider>
			</ChakraProvider>
		</BrowserRouter>
	</React.StrictMode>
)
