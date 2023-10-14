import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/Icon';
import Header from './components/Header';
import About from './components/About';
import Destination from './components/Destination';
import Popular from './components/Popular';
import Destinations from './components/Destinations';
import Customer from './components/Customer';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <About />
      <Destination />
      <Popular />
      <Destinations />
      <Customer />
      <Newsletter />
      <Footer />
    </div>
  );
}


export default App;
