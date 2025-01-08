import PropTypes from "prop-types";

const Button = ({ 
  children, 
  onClick = null, 
  className = "", 
  variant = "primary", 
  ...props 
}) => {
  const baseStyles = "w-[25vw] md:w-[10vw] h-[10vw] md:h-[4vw] font-medium rounded focus:outline-none rounded-full transition-colors text-sm md:text-lg font-semibold";

  // Variants object
  const variantStyles = {
    primary: "bg-primary text-secondary hover:bg-secondary hover:text-primary border-2 hover:border-primary",
    secondary: "bg-secondary text-primary hover:bg-primary hover:text-secondary border-2 hover:border-secondary",
    long: "bg-secondary text-primary hover:bg-primary hover:text-secondary border-2 hover:border-secondary",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant] || ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

// Adding prop validation
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
};

export default Button;
