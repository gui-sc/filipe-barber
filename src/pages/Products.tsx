import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { ArrowLeft } from 'lucide-react';

function Products() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white transition mb-8"
        >
          <ArrowLeft size={20} />
          Voltar
        </Link>

        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Nossos Produtos</h1>
          <p className="text-gray-400">Conheça nossa linha de produtos profissionais para cabelo e barba</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/produtos/${product.id}`}
              className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition group"
            >
              <div className="aspect-square bg-gray-800 flex items-center justify-center">
                <span className="text-6xl">💈</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-gray-300 transition">
                  {product.name}
                </h3>
                <p className="text-2xl font-bold text-green-500">
                  R$ {product.price}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
