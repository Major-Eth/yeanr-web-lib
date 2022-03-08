import React, { ButtonHTMLAttributes, MouseEvent, ReactElement } from "react";
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  useTheme,
} from "styled-components";
import { Spinner } from "../Spinner";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string | ReactElement;
  icon?: ReactElement;
  variant: "filled" | "outlined";
  loading?: boolean;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface ButtonIconProps extends ButtonProps {
  theme: DefaultTheme;
  buttonSize?: number;
  onSafeClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = (props: ButtonProps): ReactElement | null => {
  const theme = useTheme();

  const { disabled, loading, onClick } = props;

  const onSafeClick = (event: MouseEvent<HTMLButtonElement>): void => {
    if (!disabled && onClick) {
      onClick(event);
    }
  };

  if ("icon" in props) {
    return <ButtonIcon {...props} theme={theme} onSafeClick={onSafeClick} />;
  }

  if (loading) {
    return (
      <StyledLabelButton {...props} disabled>
        <Spinner color={theme.colors.icons.primary} />
      </StyledLabelButton>
    );
  }

  return <StyledLabelButton {...props} onClick={onSafeClick} />;
};

export function ButtonIcon(props: ButtonIconProps): ReactElement | null {
  const { loading, buttonSize, theme, icon, onSafeClick } = props;

  if (!icon) return null;

  if (loading) {
    return <Spinner color={theme.colors.primary} />;
  }

  return (
    <StyledIconButton {...props} buttonSize={buttonSize} onClick={onSafeClick}>
      {React.cloneElement(icon)}
    </StyledIconButton>
  );
}

const FILLED = (): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  color: ${({ theme }) => theme.colors.button.filled.text};
  background-color: ${({ theme }) => theme.colors.button.filled.primary};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.filled.variant};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.button.disabled.text};
    background-color: ${({ theme }) => theme.colors.button.disabled.primary};
    cursor: not-allowed;
  }
`;

const OUTLINED = (): FlattenInterpolation<ThemeProps<DefaultTheme>> => css`
  color: ${({ theme }) => theme.colors.button.outlined.text};
  background-color: transparent;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.colors.button.outlined.text};
  box-sizing: border-box;

  &:hover {
    background-color: ${({ theme }) => theme.colors.button.outlined.variant};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.button.disabled.text};
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.button.disabled.text};
    cursor: not-allowed;
  }
`;

const VARIANTS = {
  filled: FILLED,
  outlined: OUTLINED,
};

const StyledLabelButton = styled.button`
  ${({ variant }: ButtonProps) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 40px;
    font-family: "Roboto", ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, "Noto Sans",
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
    font-size: 16px;
    font-style: normal;
    font-weight: bold;
    line-height: 24px;
    border: 0;
    border-radius: 8px;
    padding: 8px 24px;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    ${VARIANTS[variant]}
  `}
`;

const StyledIconButton = styled.button<ButtonIconProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ buttonSize }) => buttonSize ?? 24}px;
  height: ${({ buttonSize }) => buttonSize ?? 24}px;
`;
