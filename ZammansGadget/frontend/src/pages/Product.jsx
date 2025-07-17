import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');

  const fetchProductData = () => {
    const found = products.find((item) => item._id === productId);
    if (found) {
      setProductData(found);
      setImage(found.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const notifyError = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const notifySuccess = (msg) => {
    toast.success(msg, {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  };

  const handleBuyNow = () => {
    if (productData.soldOut) {
      notifyError('Sorry, this product is SOLD OUT');
      return;
    }
    addToCart(productData._id, 'Default');
    navigate('/place-order');
  };

  const handleAddToCart = () => {
    if (productData.soldOut) {
      notifyError('Sorry, this product is SOLD OUT');
      return;
    }
    addToCart(productData._id, 'Default');
    notifySuccess('Added to cart!');
  };

  if (!productData) return <div className='opacity-0'></div>;

  return (
    <div className="pt-10 border-t-2 px-4 sm:px-8 md:px-16 max-w-[1200px] mx-auto">
      <ToastContainer />

      <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
        <div className="flex flex-col flex-1 gap-4 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-auto gap-3 sm:w-[20%] w-full scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
            {productData.image.map((imgUrl, idx) => (
              <img
                key={idx}
                src={imgUrl}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setImage(imgUrl)}
                className={`cursor-pointer rounded-md border ${image === imgUrl ? 'border-orange-500' : 'border-transparent'} flex-shrink-0 w-20 sm:w-full object-cover`}
                style={{ aspectRatio: '1 / 1' }}
              />
            ))}
          </div>

          <div className="relative flex-1 min-w-0">
            <img
              src={image}
              alt="Main product"
              className="w-full h-auto rounded-md object-contain max-h-[500px]"
            />
            {productData.soldOut && (
              <div className="absolute z-30 px-4 py-1 font-semibold text-white bg-red-600 rounded-md shadow-lg pointer-events-none select-none top-4 left-4">
                SOLD OUT
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1 min-w-0">
          <h1 className="text-2xl font-semibold">{productData.name}</h1>

          <div className="flex items-center gap-1 mt-2">
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="Star" className="w-5 h-5" />
            ))}
            <img src={assets.star_dull_icon} alt="Star dull" className="w-5 h-5" />
            <p className="pl-2 text-sm text-gray-600">(122)</p>
          </div>

          <p className="mt-5 text-3xl font-bold">
            {currency}{productData.price}
          </p>

          <p className="max-w-lg mt-5 text-gray-600">{productData.description}</p>

          <div className="flex flex-col max-w-xs gap-4 mt-8 sm:flex-row">
            <button
              onClick={handleAddToCart}
              disabled={productData.soldOut}
              className="flex-1 py-3 font-medium text-white transition-colors bg-black rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-800 active:bg-gray-700"
            >
              ADD TO CART
            </button>
            <button
              onClick={handleBuyNow}
              disabled={productData.soldOut}
              className="flex-1 py-3 font-medium text-white transition-colors bg-orange-600 rounded-md hover:bg-orange-700 active:bg-orange-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              BUY NOW
            </button>
          </div>

          <hr className="w-full mt-10 mb-6 border-gray-300" />
          <div className="max-w-md space-y-1 text-sm text-gray-600">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-[900px] mx-auto">
        <div className="flex border-b border-gray-300">
          <b className="px-5 py-3 text-sm cursor-pointer">Description</b>
          <p className="px-5 py-3 text-sm cursor-pointer">Reviews (122)</p>
        </div>
        <div className="p-6 space-y-4 text-sm text-gray-600 border border-t-0 border-gray-300">
          <p>
            An e-commerce website is an online platform that facilitates the buying and selling of
            products or services over the internet. It serves as a virtual marketplace where
            businesses and individuals can showcase their products, interact with customers, and
            conduct transactions without the need for a physical presence.
          </p>
          <p>
            E-commerce websites typically display products or services along with detailed
            descriptions, images, prices, and any available variations (e.g., sizes, colors).
          </p>
        </div>
      </div>

      <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  );
};

export default Product;
