declare module "react-rating-stars-component" {
  import React from "react";

  interface RatingProps {
    count: number;
    value: number;
    onChange?: (newValue: number) => void;
    size?: number;
    edit?: boolean;
    activeColor?: string;
    inactiveColor?: string;
  }

  const Rating: React.FC<RatingProps>;

  export default Rating;
}
