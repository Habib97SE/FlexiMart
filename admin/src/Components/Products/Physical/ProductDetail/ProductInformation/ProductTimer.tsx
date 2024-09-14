const ProductTimer = () => {
  return (
    <>
      <h6 className="product-title">Time Reminder</h6>
      <div className="timer">
        <p id="demo">
          <span>
            25 <span className="padding-l">:</span> <span className="timer-cal">Days</span>
          </span>
          <span>
            22 <span className="padding-l">:</span> <span className="timer-cal">Hrs</span>
          </span>
          <span>
            13 <span className="padding-l">:</span> <span className="timer-cal">Min</span>{" "}
          </span>
          <span>
            57 <span className="timer-cal">Sec</span>
          </span>
        </p>
      </div>
    </>
  );
};

export default ProductTimer;
