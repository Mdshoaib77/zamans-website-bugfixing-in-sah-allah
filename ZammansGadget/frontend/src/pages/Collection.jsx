import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [allCategories, setAllCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [activeSubCategory, setActiveSubCategory] = useState(null);
  const [sortType, setSortType] = useState('relevant');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch('http://localhost:4000/api/product/categories');
        const data = await res.json();
        if (data.success) {
          setAllCategories(data.categories);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const categoryFromUrl = params.get('category');

    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
      if (categoryFromUrl === "Official Phones") {
        setSubCategories(["Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"]);
      } else {
        setSubCategories([]);
      }
    } else {
      setActiveCategory(null);
      setActiveSubCategory(null);
    }
  }, [location.search]);

  useEffect(() => {
    let filtered = products;

    if (showSearch && search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (activeCategory) {
      filtered = filtered.filter(p => p.category === activeCategory);
    }

    if (activeSubCategory && activeCategory === "Official Phones") {
      filtered = filtered.filter(p => p.subCategory === activeSubCategory);
    }

    setFilterProducts(filtered);
  }, [products, activeCategory, activeSubCategory, search, showSearch]);

  useEffect(() => {
    let sortedProducts = [...filterProducts];
    switch (sortType) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    setFilterProducts(sortedProducts);
  }, [sortType]);

  return (
    <div className="px-4 pt-10 sm:px-6 lg:px-8 max-w-[1300px] mx-auto">
      {/* Category Selection */}
      <div className="flex flex-wrap justify-center gap-3 py-1 mb-6 sm:justify-start">
        {activeCategory === "Official Phones" ? (
          subCategories.map((sub, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSubCategory(sub)}
              className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap 
                ${activeSubCategory === sub
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {sub}
            </button>
          ))
        ) : (
          allCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveCategory(cat);
                setActiveSubCategory(null);
                navigate(`/collection?category=${encodeURIComponent(cat)}`);
              }}
              className={`px-4 py-2 rounded-md border font-medium whitespace-nowrap 
                ${activeCategory === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'}`}
            >
              {cat}
            </button>
          ))
        )}
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {filterProducts.length > 0 ? (
          filterProducts.map((item) => (
            <ProductItem
              key={item._id}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))
        ) : (
          !activeCategory ? (
            products.map((item) => (
              <ProductItem
                key={item._id}
                name={item.name}
                id={item._id}
                price={item.price}
                image={item.image}
              />
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">
              No products found.
            </p>
          )
        )}
      </div>
    </div>
  );
};

export default Collection;