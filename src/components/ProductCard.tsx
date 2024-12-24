import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { media } = product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full transition-transform hover:scale-105">
      {media?.image ? (
        <img
          src={media.image}
          alt={product.name}
          className="w-full h-48 object-contain"
          style={{ imageRendering: 'auto' }}
        />
      ) : media?.video ? (
        <video
          src={media.video}
          controls
          className="w-full h-48 object-contain"
        />
      ) : (
        <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No media available</span>
        </div>
      )}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div>
          <h4 className="font-medium text-gray-900 mb-2">Features:</h4>
          <ul className="space-y-2">
            {product.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-gray-600">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
