import "./ButtonStyles.css";
// Got this from a tutorial //
const STYLES = ["btn--primary", "btn--secondary"];

const SIZE = ["btn--med", "btn--large"];

// Need to call all the data types within
export const Button = ({
  children, //#1
  type, //#2
  onClick, //#3
  buttonStyle, //#4
  buttonSize, //#5
}) => {
  const showBtnStyle = STYLES.includes(buttonStyle) // Calling #4 within the parameters of the method 'includes()'.
    ? buttonStyle
    : STYLES[0];

  const showBtnSize = SIZE.includes(buttonSize) //
    ? buttonSize
    : SIZE[0];

  return (
    <Button
      className={`btn ${showBtnStyle} ${showBtnSize}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
};

export default Button;
