import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store/Index'
import Index from './routers/Index'


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Index/>
       </Provider>
    </div>
  )
}

export default App