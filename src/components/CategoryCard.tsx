import { Link } from 'react-router-dom';
import { Category } from '../types';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link 
      to={`/products/${category.id}`}
      className="block transition-transform hover:scale-105"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full">
        <img 
          src={category.image} 
          alt={category.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {category.name}
          </h3>
          <p className="text-gray-600">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
}