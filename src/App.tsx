import './App.css'
import ProductCard from './components/products/ProductCard'
import { productsList } from '../data/index';

function App() {

  const renderProducts = productsList.map((product)=> <ProductCard key={product.id} product={product}/>)
  return (
    <main className='container'>
      <div className='border-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 p-2'>
        {renderProducts}
      </div>
    </main>
  )
}

export default App
