import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './routes/index';

import { CartProvider } from './hooks/Cart'

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes/>
      </Router>
    </CartProvider>
  
  );
}

export default App;
