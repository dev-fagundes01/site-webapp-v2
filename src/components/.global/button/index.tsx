import { ButtonProps } from './types';
import { StyledButton } from './button.styles';

const Button: React.FC<ButtonProps> = ({
  children,
  size = 16,
  variant = "primary",
  disabled = false,
  onClick,
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} size={size} variant={variant}>
      {children}
    </StyledButton>
  );
};

export default Button;