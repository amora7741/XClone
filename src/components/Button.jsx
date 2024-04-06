const Button = ({
  backgroundColor,
  textColor,
  onClick,
  borderColor,
  children,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    border: `1px solid ${borderColor}`,
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
