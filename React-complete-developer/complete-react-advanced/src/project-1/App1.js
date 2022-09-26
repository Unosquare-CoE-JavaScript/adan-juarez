import { Routes, Route, Navigate } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import { UserContext } from './context/user.context';
import { useContext } from 'react';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

const App1 = () => {
  const { currentUser } = useContext(UserContext)
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route 
          path='auth' 
          element={ 
            currentUser ? <Navigate to="/" replace /> : <Authentication />} 
        />
      </Route>
    </Routes>
  );
};

export default App1;