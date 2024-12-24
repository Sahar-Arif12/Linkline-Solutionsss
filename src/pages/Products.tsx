import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categories, products } from '../data/products';
import CategoryCard from '../components/CategoryCard';
import ProductCard from '../components/ProductCard';
import BackButton from '../components/common/BackButton';
import Breadcrumbs from '../components/products/Breadcrumbs';

export default function Products() {
  const { categoryId, subCategoryId } = useParams();
  
  const category = categoryId 
    ? categories.find(c => c.id === categoryId)
    : undefined;

  const subCategory = category?.subCategories?.find(
    sc => sc.id === subCategoryId
  );

  if (categoryId && subCategoryId) {
    const categoryProducts = products.filter(
      p => p.category === categoryId && p.subCategory === subCategoryId
    );

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BackButton />
        <Breadcrumbs category={category} subCategory={subCategory} />
        
        <h2 className="text-3xl font-bold mb-8">
          {subCategory?.name}
        </h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }

  if (categoryId) {
    if (!category) return <div>Category not found</div>;

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BackButton />
        <Breadcrumbs category={category} />
        
        <h2 className="text-3xl font-bold mb-8">{category.name}</h2>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
  {category.subCategories?.map(subCategory => (
    <Link 
      key={subCategory.id} 
      to={`/products/${categoryId}/${subCategory.id}`}
      className="block transition-transform hover:scale-105"
    >
      <div className="bg-white rounded-lg shadow-md">
        <div className="relative w-full h-48 bg-gray-100 rounded-t-lg overflow-hidden">
          <img 
            src={subCategory.image} 
            alt={subCategory.name} 
            className="w-full h-full object-contain transform scale-90"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900">
            {subCategory.name}
          </h3>
          <p className="mt-2 text-gray-600">
            {subCategory.description}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Products</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
          
          
        ))}
      </div>
    </div>
  );
}