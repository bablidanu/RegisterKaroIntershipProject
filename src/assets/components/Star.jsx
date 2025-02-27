import PropTypes from "prop-types";

const Star = ({ size = 50 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="yellow" // Set the fill color to yellow
      className="star-icon"
    >
      <path d="M12 .587l3.668 7.568 8.332 1.207-6.004 5.848 1.417 8.267L12 18.897l-7.413 3.895 1.417-8.267-6.004-5.848 8.332-1.207z" />
    </svg>
  );
};

// Define prop types
Star.propTypes = {
  size: PropTypes.number,
};

export default Star;
