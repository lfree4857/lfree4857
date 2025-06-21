import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import './App.css'
import { CommonReducer } from './Context/CommonReducer';
import { CommonContext, initialValues } from './Context/CommonContext';
import { useReducer } from 'react';
import { SnackBar } from './components/SnackBar';
import { Loader } from './components/Loader';
import  BlogDetail  from './sections/BlogDetail';
import ProjectDetail from './sections/ProjectDetail';

function App() {
  const [state, dispatch] = useReducer(CommonReducer, initialValues)

  return (
    <CommonContext.Provider value={{ state, dispatch }}>
      <Router>
        <Routes>
            <Route>
                <Route path='/' element={<Home />} />
                <Route path="/post/:postSlug" element={<BlogDetail />} />
                <Route path="/project/:projectSlug" element={<ProjectDetail />} />
            </Route>
        </Routes>
      </Router>
      <SnackBar />
      <Loader />
    </CommonContext.Provider>
  );
}

export default App;
