import { BrowserRouter , Route, Routes} from 'react-router'
import CustomizeOrder from '../Pages/CustomizeOrder'
import ProductDetails from '../Pages/ProductDetails'
import WhoAreYou from '../Pages/WhoAreYou'
import Layout from '../Components/Layout'
import Contact from '../Pages/ContactUs'
import Products from '../Pages/Products'
import Home from '../Pages/Home'
import RouterToTop from '../Components/Static/RouterToTop/RouterToTop'

export default function AppRoutes() {
  return (
    <BrowserRouter>
        <RouterToTop />
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="contact" element={<Contact />} />
                <Route path="customizeorder" element={<CustomizeOrder />} />
                <Route path="allproducts" element={<Products />} />
                <Route path="product" element={<ProductDetails />} />
                <Route path="whoareyou" element={<WhoAreYou />} />
            </Route>
        </Routes>
    </BrowserRouter>    
   
  )
}
