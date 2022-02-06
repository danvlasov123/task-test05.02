import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {ROUTES} from './data/routes' 

import Header from './components/header/Header'
import Wrapper from './components/wrapper/Wrapper'
import Drawer from './components/drawer/Drawer'
//pages
import AuthPage from './pages/Auth/AuthPage'
import ChangePassPage from './pages/Auth/ChangePassPage'
import Default from './pages/Default/DefaultPage'
import NotFound from './pages/other/NotFound'
import NotAuthPage from './pages/other/NotAuthPage'
import { useAppSelector } from './store/hooks';
const App: React.FC = (): JSX.Element => {
  const {isAuth, isAuthCorrect} = useAppSelector((state) => state.common)
  return (
    <>
     {isAuth && <Header/>}
     {isAuth && <Drawer />}
      <Wrapper >
        <Routes>
        {ROUTES.map((item) => { 
          if (isAuth) {
            switch (item.link) {
              case 'auth': 
              return <Route key={item.id} path={item.staticPath} element={<AuthPage/>}/>
            case 'change_pass':
              return <Route key={item.id} path={item.staticPath} element={<ChangePassPage/>}/>
              case null: 
              return <Route key={item.id} path={item.staticPath} element={<Default/>}/>
            } 
          } else {
            if (isAuthCorrect) {
              switch (item.link) {
                case 'auth': 
                return <Route key={item.id} path={item.staticPath} element={<AuthPage/>}/>
                case 'change_pass':
                  return <Route key={item.id} path={item.staticPath} element={<ChangePassPage/>}/>
                  case null: 
                  return <Route key={item.id} path={item.staticPath} element={<NotAuthPage/>}/>
                }
              } else {
                switch (item.link) {
                  case 'auth': 
                  return <Route key={item.id} path={item.staticPath} element={<AuthPage/>}/>
                  case 'change_pass':
                    return <Route key={item.id} path={item.staticPath} element={<NotAuthPage/>}/>
                    case null: 
                    return <Route key={item.id} path={item.staticPath} element={<NotAuthPage/>}/>
                  }
              }
        }
        })}
        <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
