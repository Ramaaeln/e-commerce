interface ProductSpecsProps {
  specifications: {
    material: string;
    weight: string;
    colors?: string[];
    sizes?: string[];
    features?: string;
    careInstructions: string;
    frameSize?: string;
  };
}

export default function ProductSpecs({ specifications }: ProductSpecsProps) {
  return (
    <div className="max-w-7xl mx-auto px-8 py-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold mb-6">Product Specifications</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-semibold text-lg mb-4">Technical Details</h3>
          <div className="space-y-3">
            <div className="flex">
              <span className="font-medium w-32 text-gray-600">Material:</span>
              <span>{specifications.material}</span>
            </div>
            <div className="flex">
              <span className="font-medium w-32 text-gray-600">Weight:</span>
              <span>{specifications.weight}</span>
            </div>
            {specifications.frameSize && (
              <div className="flex">
                <span className="font-medium w-32 text-gray-600">
                  Frame Size:
                </span>
                <span>{specifications.frameSize}</span>
              </div>
            )}
            {specifications.features && (
              <div className="flex">
                <span className="font-medium w-32 text-gray-600">
                  Features:
                </span>
                <span>{specifications.features}</span>
              </div>
            )}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Care & Maintenance</h3>
          <div className="space-y-3">
            <div>
              <span className="font-medium text-gray-600">
                Care Instructions:
              </span>
              <p className="mt-1 text-sm text-gray-700">
                {specifications.careInstructions}
              </p>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Size Guide</h4>
              <p className="text-sm text-blue-700">
                Need help with sizing? Check our detailed size guide or contact
                customer service for personalized assistance.
              </p>
              <button className="mt-2 text-blue-600 text-sm font-medium hover:underline">
                View Size Chart →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
