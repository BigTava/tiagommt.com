import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import { store } from 'state/store'

import App from './App'

// Styles
import './index.css'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(document.getElementById('root')!)
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
)
