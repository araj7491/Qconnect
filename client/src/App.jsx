import { useState } from 'react';
import reactLogo from './assets/react.svg';

import './styles.css';
import IndexPage from './pages/index.jsx'; // Import your main page

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Your QConnect Homepage */}
      <IndexPage />

      
    </>
  );
}

export default App;