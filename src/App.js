import Navigation from './components/Navigation'
import Head from './components/Head'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css';

// Bootstrap importations
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="site">
      <Navigation />
      <Head />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
