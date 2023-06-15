import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store';
import Navbar from './components/Navbar';
import Profile from './Profile';
import { DataContext, data } from './context/DataContext';


const router =
<Provider store={store}>
  <DataContext.Provider value ={data}>
  <BrowserRouter>
  <Navbar/>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/profile' element={<Profile />} />
    </Routes>
  </BrowserRouter>
  </DataContext.Provider>
</Provider>

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( router );