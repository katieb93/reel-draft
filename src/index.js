
import * as ReactDOMClient from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

// Create a root.
const root = ReactDOMClient.createRoot(container);

// Render the App component
root.render(<App />);
