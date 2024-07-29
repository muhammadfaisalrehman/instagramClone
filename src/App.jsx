import { Routes, Route} from 'react-router-dom'

import './globals.css'
 
const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route>
          <Route path="/sign-in" element={<SigninForm />} />
        </Route>

        {/* private routes */}
        <Route>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App