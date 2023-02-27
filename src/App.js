import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import Product from './pages/Product';
import Counter from './pages/Counter';
import Login from './pages/Login';
import Input from './pages/Input';
import List from './pages/List';
import NotFound from './pages/NotFound';

function App(){
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/input" element={<Input />} />
        <Route path="/list" element={<List />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}


export default App;
