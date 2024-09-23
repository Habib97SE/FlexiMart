import React, { useState } from "react";

const PriceRangeFilter = () => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(500);
    const minValue = 0;
    const maxValue = 1000;

    // Update the price range when the slider is dragged
    const handleSliderChange = (e, type) => {
        const value = Number(e.target.value);
        if (type === "min") {
            // Ensure minPrice does not exceed maxPrice - 1
            if (value < maxPrice) {
                setMinPrice(value);
            }
        } else {
            // Ensure maxPrice does not go below minPrice + 1
            if (value > minPrice) {
                setMaxPrice(value);
            }
        }
    };

    // Update the slider when the user inputs a value directly
    const handleInputChange = (e, type) => {
        const value = Number(e.target.value);
        if (type === "min") {
            if (value <= maxPrice && value >= minValue) setMinPrice(value);
        } else {
            if (value >= minPrice && value <= maxValue) setMaxPrice(value);
        }
    };

    return (
        <div className="p-4">
            {/* Input fields for min and max price */}
            <div className="flex justify-between items-center mb-4">
                <input
                    type="number"
                    value={minPrice}
                    min={minValue}
                    max={maxPrice - 1}
                    onChange={(e) => handleInputChange(e, "min")}
                    className="border p-2 w-24"
                />
                <span className="mx-2">to</span>
                <input
                    type="number"
                    value={maxPrice}
                    min={minPrice + 1}
                    max={maxValue}
                    onChange={(e) => handleInputChange(e, "max")}
                    className="border p-2 w-24"
                />
            </div>

            {/* Range slider for price range */}
            <div className="relative h-2 rounded bg-gray-300">
                {/* Left (min) slider */}
                <input
                    type="range"
                    min={minValue}
                    max={maxValue}
                    value={minPrice}
                    onChange={(e) => handleSliderChange(e, "min")}
                    className="absolute z-20 h-2 w-full appearance-none bg-transparent pointer-events-auto"
                    style={{ zIndex: minPrice === maxPrice ? 10 : 20 }} // Adjusting z-index for correct stacking
                />
                {/* Right (max) slider */}
                <input
                    type="range"
                    min={minValue}
                    max={maxValue}
                    value={maxPrice}
                    onChange={(e) => handleSliderChange(e, "max")}
                    className="absolute z-10 h-2 w-full appearance-none bg-transparent pointer-events-auto"
                />

                {/* Visual indicator of the selected price range */}
                <div
                    className="absolute h-2 bg-red-500 rounded"
                    style={{
                        left: `${(minPrice / maxValue) * 100}%`,
                        right: `${100 - (maxPrice / maxValue) * 100}%`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default PriceRangeFilter;
