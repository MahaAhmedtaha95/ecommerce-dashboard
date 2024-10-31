import { Product } from '../types/Product';
import RatingComponent from './RatingComponent';

const ProductModal = ({ product, onClose, isOpen }: { product: Product; onClose: () => void; isOpen: boolean }) => {
  return (
    <>
      <div className={`${isOpen ? '' : 'hidden'
        } fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-900 bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t ">

              <h3 className="text-xl font-semibold text-gray-900 ">
                Product Details
              </h3>
              <button type="button" onClick={onClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="default-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-4 md:p-5 space-y-4">
              <div className="h-56 w-full rounded-lg ">
                <a href="#">
                  <img className="mx-auto h-full" src={product.image} alt="" />
                </a>
              </div>
              <p className="text-base leading-relaxed text-gray-500 ">
                {product.name}
              </p>
              <p className="text-base leading-relaxed text-gray-500 ">
                {product.description}
              </p>
              <div className="text-base leading-relaxed text-gray-500  flex justify-between	px-6">
                <RatingComponent maxStars={5} ratevalue={product.rate} />
                <span className="text-2xl font-extrabold leading-tight text-gray-900 ">${product.price}</span>
              </div>
              
              <ul className="mt-2 flex items-center gap-4 px-6 justify-between">
            <li className="flex items-center gap-2">
              <svg className="h-4 w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500 ">Fast Delivery</p>
            </li>

            <li className="flex items-center gap-2 ">
              <svg className="h-4 w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <p className="text-sm font-medium text-gray-500">Best Price</p>
            </li>
          </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
