import { Outlet } from 'react-router-dom';
import Header from './components/Navigation/Header';
import StyledHr from './components/Divider/StyledHr';
import Footer from './components/Foot/Footer';
import './App.scss';

function App() {

  return (
    <div className='App'>
      <Header />
      <StyledHr alignment='right'/>
      <main>
        <Outlet />
      </main>
      <StyledHr alignment='left'/>
      <Footer />
    </div>
  )
}

export default App;
