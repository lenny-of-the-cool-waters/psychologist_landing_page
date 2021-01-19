import Navigation from './components/Navigation'
import Head from './components/Head'
import './App.css';

// Bootstrap importations
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Container className="site">
      <Navigation />
      <Head />
    </Container>
  )
}

export default App;
