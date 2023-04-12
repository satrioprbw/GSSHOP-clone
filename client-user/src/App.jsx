import { RouterProvider } from 'react-router-dom'
import { Provider as ReduxProvider} from 'react-redux'

import router from './routes/router'
import store from './stores/index'

function App() {
    return (
    <ReduxProvider store={store}>
        <RouterProvider router={router}/>
    </ReduxProvider>
    )
}

export default App