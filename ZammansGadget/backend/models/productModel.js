// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   price: Number,
//   category: String,
//   subCategory: String,
//   bestseller: Boolean,
//   soldOut: { type: Boolean, default: false },
//   sizes: [String],
//   colors: [String],  // <-- এখানে colors array যোগ করা হলো
//   image: [String],
//   date: { type: Date, default: Date.now }
// });

// const productModel = mongoose.model('Product', productSchema);

// export default productModel;



// import mongoose from 'mongoose';

// // Define category options to ensure consistency in category names
// const categoryOptions = [
//   "Official Phones",
//   "Unofficial Phones",
//   "Used Phones",
//   "Adapter and Cables",
//   "PowerBank",
//   "Airbuds", // Corrected Airpods to Airbuds
//   "Earphones",
//   "Neckband",
//   "Gaming Accessories",
//   "Speakers",
//   "Cover and Glass",
//   "Smart Watch"
// ];

// // Define subcategory options for "Official Phones"
// const officialPhoneSubCategories = [
//   "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
// ];

// // Create Schema for Product
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true }, // Ensure name is always provided
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { 
//     type: String, 
//     enum: categoryOptions, // Only allow specific categories
//     required: true 
//   },
//   subCategory: { 
//     type: String, 
//     enum: function() {
//       if (this.category === "Official Phones") {
//         return officialPhoneSubCategories; // Only allow specific subcategories for Official Phones
//       }
//       return []; // Other categories have no subcategories
//     },
//     required: function() {
//       return this.category === "Official Phones"; // Ensure subcategory is required only for Official Phones
//     }
//   },
//   bestseller: { type: Boolean, default: false },
//   soldOut: { type: Boolean, default: false },
//   sizes: { type: [String], default: [] },
//   colors: { type: [String], default: [] }, // <-- Ensure default empty array for colors
//   image: { type: [String], default: [] }, // <-- Ensure default empty array for images
//   date: { type: Date, default: Date.now }
// });

// // Create Product model
// const productModel = mongoose.model('Product', productSchema);

// export default productModel;


// import mongoose from 'mongoose'; 

// // Define category options to ensure consistency in category names
// const categoryOptions = [
//   "Official Phones",
//   "Unofficial Phones",
//   "Used Phones",
//   "Adapter & Cables", 
//   "PowerBank",
//   "Airbuds", // Corrected Airpods to Airbuds
//   "Earphones",
//   "Neckband",
//   "Gaming Accessories",
//   "Speakers",
//   "Cover & Glass", 
//   "Smart Watch"
// ];

// // Define subcategory options for "Official Phones"
// const officialPhoneSubCategories = [
//   "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
// ];

// // Create Schema for Product
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true }, // Ensure name is always provided
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { 
//     type: String, 
//     enum: categoryOptions, // Only allow specific categories
//     required: true 
//   },
//   subCategory: { 
//     type: String, 
//     enum: function() {
//       if (this.category === "Official Phones") {
//         return officialPhoneSubCategories; // Only allow specific subcategories for Official Phones
//       }
//       return []; // No subcategories for other categories
//     },
//     required: function() {
//       return this.category === "Official Phones"; // Only required if category is "Official Phones"
//     }
//   },
//   bestseller: { type: Boolean, default: false },
//   soldOut: { type: Boolean, default: false },
//   sizes: { type: [String], default: [] },
//   colors: { type: [String], default: [] }, // Ensure default empty array for colors
//   image: { type: [String], default: [] }, // Ensure default empty array for images
//   date: { type: Date, default: Date.now }
// });

// // Create Product model
// const productModel = mongoose.model('Product', productSchema);

// export default productModel;




// import mongoose from 'mongoose';

// // Define category options to ensure consistency in category names
// const categoryOptions = [
//   "Official Phones",
//   "Unofficial Phones",
//   "Used Phones",
//   "Adapter & Cables", 
//   "PowerBank",
//   "Airbuds", // Corrected Airpods to Airbuds
//   "Earphones",
//   "Neckband",
//   "Gaming Accessories",
//   "Speakers",
//   "Cover & Glass", 
//   "Smart Watch"
// ];

// // Define subcategory options for "Official Phones"
// const officialPhoneSubCategories = [
//   "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
// ];

// // Create Schema for Product
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true }, // Ensure name is always provided
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { 
//     type: String, 
//     enum: categoryOptions, // Only allow specific categories
//     required: true 
//   },
//   subCategory: { 
//     type: String, 
//     enum: function() {
//       if (this.category === "Official Phones") {
//         return officialPhoneSubCategories; // Only allow specific subcategories for Official Phones
//       }
//       return []; // No subcategories for other categories
//     },
//     required: function() {
//       return this.category === "Official Phones"; // Only required if category is "Official Phones"
//     },
//     default: "" // Allow an empty string if subCategory is not applicable
//   },
//   bestseller: { type: Boolean, default: false },
//   soldOut: { type: Boolean, default: false },
//   sizes: { type: [String], default: [] },
//   colors: { type: [String], default: [] }, // Ensure default empty array for colors
//   image: { type: [String], default: [] }, // Ensure default empty array for images
//   date: { type: Date, default: Date.now }
// });

// // Create Product model
// const productModel = mongoose.model('Product', productSchema);

// export default productModel;


// import mongoose from 'mongoose'; 

// // Define category options to ensure consistency in category names
// const categoryOptions = [
//   "Official Phones",
//   "Unofficial Phones",
//   "Used Phones",
//   "Adapter & Cables", 
//   "PowerBank",
//   "Airbuds", // Corrected Airpods to Airbuds
//   "Earphones",
//   "Neckband",
//   "Gaming Accessories",
//   "Speakers",
//   "Cover & Glass", 
//   "Smart Watch"
// ];

// // Define subcategory options for "Official Phones"
// const officialPhoneSubCategories = [
//   "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
// ];

// // Create Schema for Product
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true }, 
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { 
//     type: String, 
//     enum: categoryOptions, 
//     required: true 
//   },
//   subCategory: { 
//     type: String, 
//     enum: function() {
//       if (this.category === "Official Phones") {
//         return officialPhoneSubCategories; // Only allow specific subcategories for Official Phones
//       }
//       return []; // Other categories have no subcategories
//     },
//     required: function() {
//       return this.category === "Official Phones"; // Subcategory is required only for Official Phones
//     },
//     default: undefined // Make subCategory optional
//   },
//   bestseller: { type: Boolean, default: false },
//   soldOut: { type: Boolean, default: false },
//   sizes: { type: [String], default: [] },
//   colors: { type: [String], default: [] },
//   image: { type: [String], default: [] },
//   date: { type: Date, default: Date.now }
// });

// // Create Product model
// const productModel = mongoose.model('Product', productSchema);

// export default productModel;
// import mongoose from 'mongoose'; 

// // Define category options to ensure consistency in category names
// const categoryOptions = [
//   "Official Phones",
//   "Unofficial Phones",
//   "Used Phones",
//   "Adapter & Cables", 
//   "PowerBank",
//   "Airbuds", 
//   "Earphones",
//   "Neckband",
//   "Gaming Accessories",
//   "Speakers",
//   "Cover & Glass", 
//   "Smart Watch"
// ];

// // Define subcategory options for "Official Phones"
// const officialPhoneSubCategories = [
//   "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
// ];

// // Create Schema for Product
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true }, 
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { 
//     type: String, 
//     enum: categoryOptions, 
//     required: true 
//   },
//   subCategory: { 
//     type: String, 
//     enum: function() {
//       if (this.category === "Official Phones") {
//         return officialPhoneSubCategories; // Only allow specific subcategories for Official Phones
//       }
//       return undefined; // Do not restrict subCategory for other categories
//     },
//     required: function() {
//       return this.category === "Official Phones"; // Ensure subCategory is required only for Official Phones
//     },
//     // Default set to null if no subCategory is provided
//     default: null
//   },
//   bestseller: { type: Boolean, default: false },
//   soldOut: { type: Boolean, default: false },
//   sizes: { type: [String], default: [] },
//   colors: { type: [String], default: [] },
//   image: { type: [String], default: [] },
//   date: { type: Date, default: Date.now }
// });

// // Create Product model
// const productModel = mongoose.model('Product', productSchema);

// export default productModel;

// import mongoose from 'mongoose'; 

// // Define category options to ensure consistency in category names
// const categoryOptions = [
//   "Official Phones",
//   "Unofficial Phones",
//   "Used Phones",
//   "Adapter & Cables", 
//   "PowerBank",
//   "Airbuds", 
//   "Earphones",
//   "Neckband",
//   "Gaming Accessories",
//   "Speakers",
//   "Cover & Glass", 
//   "Smart Watch"
// ];

// // Define subcategory options for "Official Phones"
// const officialPhoneSubCategories = [
//   "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
// ];

// // Create Schema for Product
// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true }, 
//   description: { type: String, required: true },
//   price: { type: Number, required: true },
//   category: { 
//     type: String, 
//     enum: categoryOptions, 
//     required: true 
//   },
//   subCategory: { 
//     type: String, 
//     // Custom validator to ensure that subCategory is only valid if category is "Official Phones"
//     validate: {
//       validator: function(value) {
//         // If category is "Official Phones", subCategory must be in the allowed list
//         if (this.category === "Official Phones") {
//           return officialPhoneSubCategories.includes(value);
//         }
//         // If category is not "Official Phones", subCategory is not required
//         return true;
//       },
//       message: props => `${props.value} is not a valid subCategory for ${this.category}`
//     },
//     required: function() {
//       return this.category === "Official Phones"; // Only required for "Official Phones"
//     },
//     default: null  // Default subCategory to null if not provided
//   },
//   bestseller: { type: Boolean, default: false },
//   soldOut: { type: Boolean, default: false },
//   sizes: { type: [String], default: [] },
//   colors: { type: [String], default: [] },
//   image: { type: [String], default: [] },
//   date: { type: Date, default: Date.now }
// });

// // Create Product model
// const productModel = mongoose.model('Product', productSchema);

// export default productModel;

import mongoose from 'mongoose'; 

// Define category options to ensure consistency in category names
const categoryOptions = [
  "Official Phones",
  "Unofficial Phones",
  "Used Phones",
  "Adapter & Cables", 
  "PowerBank",
  "Airbuds", 
  "Earphones",
  "Neckband",
  "Gaming Accessories",
  "Speakers",
  "Cover & Glass", 
  "Smart Watch"
];

// Define subcategory options for "Official Phones"
const officialPhoneSubCategories = [
  "Samsung", "Realme", "Xiaomi", "Vivo", "Oppo", "Infinix", "Tecno", "Huawei"
];

// Create Schema for Product
const productSchema = new mongoose.Schema({
  name: { type: String, required: true }, 
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { 
    type: String, 
    enum: categoryOptions, 
    required: true 
  },
  subCategory: { 
    type: String, 
    // Custom validator to ensure that subCategory is only valid if category is "Official Phones"
    validate: {
      validator: function(value) {
        // If category is "Official Phones", subCategory must be in the allowed list
        if (this.category === "Official Phones") {
          return officialPhoneSubCategories.includes(value);
        }
        // If category is not "Official Phones", subCategory is not required
        return true;
      },
      message: props => `${props.value} is not a valid subCategory for ${this.category}`
    },
    required: function() {
      return this.category === "Official Phones"; // Only required for "Official Phones"
    },
    default: null  // Default subCategory to null if not provided
  },
  bestseller: { type: Boolean, default: false },
  soldOut: { type: Boolean, default: false },
  sizes: { type: [String], default: [] },
  colors: { type: [String], default: [] },
  image: { type: [String], default: [] },
  date: { type: Date, default: Date.now }
});

// Create Product model
const productModel = mongoose.model('Product', productSchema);

export default productModel;




// import mongoose from 'mongoose';

// const productSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   description: String,
//   price: Number,
//   category: { type: String, required: true },   // Only category field
//   bestseller: { type: Boolean, default: false }, // Mark featured product
//   soldOut: { type: Boolean, default: false },
//   sizes: [String],
//   colors: [String],
//   image: [String],
//   date: { type: Date, default: Date.now }
// });

// const productModel = mongoose.model('Product', productSchema);

// export default productModel;

