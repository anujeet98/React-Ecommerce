import CartProvider from './contexts/CartProvider';
import AppBody from './components/AppBody/AppBody';
import AppNavbar from './components/Navbar/AppNavbar';
function App() {
  return (
    <CartProvider>
      <AppNavbar/>
      <AppBody/>
    </CartProvider>
  );
}

export default App;
