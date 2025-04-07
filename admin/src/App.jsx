import { useContext } from 'react'
import classes from './styles/dark.module.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import Main from './layout/Main';
import {
  Home, Login, List, Single, Edit, New, Profile,
} from './pages'
import { ToastContainer } from 'react-toastify';
import { BY_ID, CERTIFICATIONS, EDIT_BY_ID, EDUCATION, EXPERIENCE, LOGIN, NEW, PROJECTS, ROOT, SKILLS, USERS } from './routes';
import { educationColumns, experienceColumns, projectColumns, skillColumns } from './datatablesource';
function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to={"/login"} />
    }
    return children
  }


  /**
   * =====
   * TODOD
   * =====
   * - multiple image upload for Edit
   * 
   */

  return (
    <div className={`${classes.app} ${darkMode ? classes.dark : ''}`}>
      <BrowserRouter>
        <Routes>
          <Route path={ROOT} element={<Main />}>
            <Route path={LOGIN} element={<Login />} />
            <Route index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path={USERS}>
              <Route index element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT_BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
            </Route>
            <Route path={SKILLS}>
              <Route index element={
                <ProtectedRoute>
                  <List columns={skillColumns} />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={NEW} element={
                <ProtectedRoute>
                  <New />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT_BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
            </Route>
            <Route path={PROJECTS}>
              <Route index element={
                <ProtectedRoute>
                  <List columns={projectColumns} />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT_BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
              <Route path={NEW} element={
                <ProtectedRoute>
                  <New />
                </ProtectedRoute>
              } />
            </Route>
            <Route path={EXPERIENCE}>
              <Route index element={
                <ProtectedRoute>
                  <List columns={experienceColumns} />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT_BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
              <Route path={NEW} element={
                <ProtectedRoute>
                  <New />
                </ProtectedRoute>
              } />
            </Route>
            <Route path={EDUCATION}>
              <Route index element={
                <ProtectedRoute>
                  <List columns={educationColumns} />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT_BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
              <Route path={NEW} element={
                <ProtectedRoute>
                  <New />
                </ProtectedRoute>
              } />
            </Route>
            <Route path={CERTIFICATIONS}>
              <Route index element={
                <ProtectedRoute>
                  <List columns={educationColumns} />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT_BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
              <Route path={NEW} element={
                <ProtectedRoute>
                  <New />
                </ProtectedRoute>
              } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  )
}

export default App
