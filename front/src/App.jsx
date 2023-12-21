import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminRouter from '@/Pages/Admin/AdminRouter.jsx'
import AuthRouter from '@/Pages/Auth/AuthRouter.jsx'
import PublicRouter from '@/Pages/Public/PublicRouter.jsx'
import AuthGuard from '@/_Helpers/AuthGuard.jsx'


function App() {

  return (
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<PublicRouter />} />
            <Route path="/Auth/*" element={<AuthRouter />} />
            <Route path="/Admin/*" element={
              <AuthGuard>
                <AdminRouter />
              </AuthGuard>
            } />
          </Routes>
        </BrowserRouter>
      </div>
  )
}

export default App 
