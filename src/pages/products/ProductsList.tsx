import { useEffect, useState } from 'react';
import { fetchProducts } from '../../utils/api';
import ProductCard from '../../components/ProductCard';
import CategoryFilter from './Filteration';
import { Product } from '../../types/Product';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [displayLimit, setDisplayLimit] = useState<number>(8);

  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const data: Product[] = await fetchProducts();
        setProducts(data);
        setFilteredProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, []);

  useEffect(() => {
    if (category) {
      setFilteredProducts(products.filter((p) => p.category === category));
    } else {
      setFilteredProducts(products);
    }
  }, [category, products]);
  const showMoreProducts = () => {
    setDisplayLimit((prevLimit) => prevLimit + 5); // Load 5 more products
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
    {loading ? (
      <p>Loading...</p>
    ) : error ? (
      <p>{error}</p>
    ) : (
      
    <section className="bg-gray-50 p-8 antialiased  md:py-12">
      <CategoryFilter category={category} setCategory={setCategory}/>
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 grid gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.slice(0, displayLimit).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {displayLimit < products.length && ( <div className="w-full text-center">
            <button onClick={showMoreProducts} type="button" className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100">Show more</button>
          
          </div>)}
        </div>
      </div>
    </section>)
  }
  </>
  );
};

export default ProductList;
