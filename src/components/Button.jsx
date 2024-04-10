const Button = ({
  backgroundColor,
  textColor,
  onClick,
  borderColor,
  type = 'button',
  children,
}) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    border: `1px solid ${borderColor}`,
  };

  return (
    <button style={buttonStyle} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
