import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

interface BreadcrumbsProps {
  category?: {
    id: string;
    name: string;
  };
  subCategory?: {
    id: string;
    name: string;
  };
}

export default function Breadcrumbs({ category, subCategory }: BreadcrumbsProps) {
  return (
    <nav className="flex mb-4" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link to="/products" className="text-gray-700 hover:text-primary">
            Products
          </Link>
        </li>
        
        {category && (
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
              <Link 
                to={`/products/${category.id}`}
                className="ml-1 text-gray-700 hover:text-primary md:ml-2"
              >
                {category.name}
              </Link>
            </div>
          </li>
        )}

        {subCategory && (
          <li>
            <div className="flex items-center">
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-gray-500 md:ml-2">
                {subCategory.name}
              </span>
            </div>
          </li>
        )}
      </ol>
    </nav>
  );
}