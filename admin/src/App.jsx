import { useContext } from 'react'
import classes from './styles/dark.module.scss'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import Main from './layout/Main';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import List from './pages/list/List'
import Single from './pages/single/Single'

import { ToastContainer } from 'react-toastify';
import { BY_ID, EDIT, EDUCATION, EXPERIENCE, LOGIN, NEW, PROJECTS, ROOT, SKILLS, USERS } from './routes';
import { hotelColumns, roomColumns, skillColumns } from './datatablesource';
import Edit from './pages/edit/Edit';
import NewSkill from './pages/newSkill/NewSkill';
function App() {
  const { darkMode } = useContext(DarkModeContext);

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user) {
      return <Navigate to={"/login"} />
    }
    return children
  }

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
                  {/* <List columns={userColumns} /> */}
                  <Single />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT}/${BY_ID}`} element={
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
                  <NewSkill />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT}/${BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
            </Route>
            <Route path={PROJECTS}>
              <Route index element={
                <ProtectedRoute>
                  <List columns={roomColumns} />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT}/${BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
              <Route path={NEW} element={
                <ProtectedRoute>
                  <NEW />
                </ProtectedRoute>
              } />
            </Route>
            <Route path={EXPERIENCE}>
              <Route index element={
                <ProtectedRoute>
                  <List columns={roomColumns} />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT}/${BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
              <Route path={NEW} element={
                <ProtectedRoute>
                  <NEW />
                </ProtectedRoute>
              } />
            </Route>
            <Route path={EDUCATION}>
              <Route index element={
                <ProtectedRoute>
                  <List columns={roomColumns} />
                </ProtectedRoute>}>
              </Route>
              <Route path={BY_ID} element={
                <ProtectedRoute>
                  <Single />
                </ProtectedRoute>
              } />
              <Route path={`${EDIT}/${BY_ID}`} element={
                <ProtectedRoute>
                  <Edit />
                </ProtectedRoute>
              } />
              <Route path={NEW} element={
                <ProtectedRoute>
                  <NEW />
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
