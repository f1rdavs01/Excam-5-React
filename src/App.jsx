import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './layout/header/header';
import Footer from './layout/footer/footer';
import {Home} from './pages/home/home';
import About from './pages/about/about';
import Shop from './pages/shop/shop';
import ProductPage from './components/product-page';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path='/about' element={<About/>}/>
                <Route path='/shop' element={<Shop/>}/>
               <Route path="product-page/:id" element={<ProductPage/>} />

            </Routes>
           <Footer/>
        </Router>
    );
};

export default App;
