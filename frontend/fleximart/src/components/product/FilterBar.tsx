import { FaTh, FaBars } from 'react-icons/fa';

const FilterBar = ({ layout, setLayout, productsPerRow, setProductsPerRow, sortOrder, setSortOrder }) => {

    const ProductPerRowBar = (active) => {
        return (
            <span className={`w-2 h-6 ${active ? 'bg-red-500' : 'bg-gray-300'} cursor-pointer`} ></span>
        );

    }

    return (
        <div className="border-t border-b py-4 mb-6">
            <div className="flex justify-between items-center">
                {/* Showing Products Count */}
                <div>
                    <p className="text-gray-700">
                        Showing Products 1-16 Of 30 Result
                    </p>
                </div>

                {/* Layout Switcher and Grid Options */}
                <div className="flex items-center space-x-4">
                    {/* Layout Icons */}
                    <div className="flex space-x-2">
                        <FaTh
                            className={`cursor-pointer ${layout === 'grid' ? 'text-red-500' : 'text-gray-500'}`}
                            onClick={() => setLayout('grid')}
                            size={18}
                        />
                        <FaBars
                            className={`cursor-pointer ${layout === 'list' ? 'text-red-500' : 'text-gray-500'}`}
                            onClick={() => setLayout('list')}
                            size={18}
                        />
                    </div>
                    <span className="mx-4"></span>
                    {/* Product Layout Bars */}
                    <div className="flex space-x-5">
                        <div className='flex space-x-1' onClick={() => setProductsPerRow(2)} >
                            {Array(2).fill(0).map((_, i) => (
                                <ProductPerRowBar key={i} active={productsPerRow === 2} />
                            ))}
                        </div>
                        <div className="flex space-x-1"
                            onClick={() => setProductsPerRow(3)}>
                            {Array(3).fill(0).map((_, i) => (
                                <ProductPerRowBar key={i} active={productsPerRow === 3} />
                            ))}

                        </div>


                        <div className="flex space-x-1"
                            onClick={() => setProductsPerRow(4)}>
                            {Array(4).fill(0).map((_, i) => (
                                <ProductPerRowBar key={i} active={productsPerRow === 4} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Products Per Page and Sorting Dropdown */}
                <div className="flex space-x-6">
                    {/* Sorting Dropdown */}
                    <div className="relative">
                        <select
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="default">Sorting items</option>
                            <option value="HighToLow">Price: High To Low</option>
                            <option value="LowToHigh">Price: Low To High</option>
                            <option value="AZ">Alphabetically: A-Z</option>
                            <option value="ZA">Alphabetically: Z-A</option>
                        </select>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default FilterBar;
