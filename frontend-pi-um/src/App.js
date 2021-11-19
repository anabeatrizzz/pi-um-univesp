import './App.css';
import Home from './pages/home';
import WrapperPage from './components/wrapper-page';
import axios from 'axios';

function App() {
  return (
    <WrapperPage>
      <Home />
    </WrapperPage>
  );
}

export default App;
