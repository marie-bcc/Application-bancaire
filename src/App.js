import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import UserProfile from './pages/UserProfile/UserProfile';
import PrivateRoute from './pages/UserProfile/PrivateRoute'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import { store } from './store';

function App() {
    return (
        <Provider store={store}> 
            <Router>
                <div className="App">
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/userprofile" element={<PrivateRoute />} >
                          <Route index element={<UserProfile />} />
                        </Route>
                    </Routes>
                </div>
            </Router>
        </Provider> 
    );
}

export default App;

