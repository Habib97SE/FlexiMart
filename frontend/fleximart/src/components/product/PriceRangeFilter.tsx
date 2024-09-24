const PriceRangeFilter = () => {
    return (
        <div>
            <h2>Price Range Filter</h2>
            <div>
                <input type="range" min="0" max="100" value="50" />
            </div>
        </div>
    );
}

export default PriceRangeFilter;