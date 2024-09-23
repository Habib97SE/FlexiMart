import { useState } from 'react';
import { FaTh, FaBars } from 'react-icons/fa';

const FilterBar = () => {
    const [layout, setLayout] = useState('grid');
    const [productsPerPage, setProductsPerPage] = useState(10);
    const [sortOrder, setSortOrder] = useState('Sorting items');

    const ColorBar = ({ index }) => {
        return (
            <div key={index} className="w-2 h-6 bg-red-500"></div>
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
                    <div className="flex space-x-1 ">

                        {[...Array(2)].map((_, i) => (
                            <ColorBar key={i} index={i} />
                        ))}
                        <span className="mx-5"></span>
                        {[...Array(4)].map((_, i) => (
                            <ColorBar key={i} index={i} />
                        ))}
                        <span className="mx-3"></span>
                        {[...Array(6)].map((_, i) => (
                            <ColorBar key={i} index={i} />
                        ))}
                    </div>
                </div>

                {/* Products Per Page Dropdown */}
                <div className="flex space-x-6">
                    {/* Products Per Page Dropdown */}
                    <div className="relative">
                        <select
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            value={productsPerPage}
                            onChange={(e) => setProductsPerPage(Number(e.target.value))}
                        >
                            <option value={10}>10 Products Per Page</option>
                            <option value={15}>15 Products Per Page</option>
                            <option value={20}>20 Products Per Page</option>
                        </select>
                    </div>

                    {/* Sorting Dropdown */}
                    <div className="relative">
                        <select
                            className="border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value)}
                        >
                            <option value="Sorting items">Sorting items</option>
                            <option value="HighToLow">High To Low</option>
                            <option value="LowToHigh">Low To High</option>
                            <option value="Newest">Newest</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterBar;
