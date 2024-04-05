const Button = ({ backgroundColor, textColor, borderColor, children }) => {
  const buttonStyle = {
    backgroundColor: backgroundColor,
    color: textColor,
    border: `1px solid ${borderColor}`,
  };

  return <button style={buttonStyle}>{children}</button>;
};

export default Button;
