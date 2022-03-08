import React, {
  ReactElement,
  ReactNode,
  RefObject,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import styled, { DefaultTheme, useTheme } from "styled-components";
import { Menu } from "@headlessui/react";
import { ChevronIcon } from "../../../stories/Icon.stories";
import { IconDirection } from "../Icon/Direction";
import { Text } from "../../typography";

interface Option {
  value: string;
  label: string;
}

export interface DropdownProps {
  icon: ReactElement;
  label: string;
  options: Option[];
}

export const Dropdown = ({
  icon,
  label,
  options,
}: DropdownProps): ReactElement | null => {
  const theme = useTheme();
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([{ contentRect }]) => {
      setWidth(contentRect.width);
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, width]);

  return (
    <Menu>
      {({ open }) => (
        <>
          <StyledMenuButton ref={ref}>
            <MenuButtonIconLabel theme={theme} icon={icon} label={label} />
            {/* TODO: Use the new ChevronIcon https://github.com/Major-Eth/yearn-web-lib/pull/26 */}
            <div style={{ padding: "0.5rem" }}>
              <ChevronIcon
                direction={open ? IconDirection.Up : IconDirection.Down}
              />
            </div>
          </StyledMenuButton>
          <StyledMenuItems width={width}>
            {options.map(({ value, label }) => (
              <StyledMenuItem key={value}>
                {({ active }: { active: boolean }) => (
                  <Text color={theme.colors.primary}>
                    {active ? `-> ${label}` : label}
                  </Text>
                )}
              </StyledMenuItem>
            ))}
          </StyledMenuItems>
        </>
      )}
    </Menu>
  );
};

export const MenuButtonIconLabel = ({
  icon,
  label,
  theme,
}: {
  icon?: ReactElement;
  label: string;
  theme: DefaultTheme;
}): ReactElement => {
  return (
    <StyledMenuButtonIconLabelContainer>
      {icon && <StyledIconContainer>{icon}</StyledIconContainer>}
      <Text color={theme.colors.primary}>{label}</Text>
    </StyledMenuButtonIconLabelContainer>
  );
};

const StyledMenuButton = styled(Menu.Button)<{
  children: ReactNode;
  ref?: RefObject<HTMLDivElement>;
}>`
  align-items: center;
  background: ${({ theme }) => theme.colors.backgroundVariant};
  border-radius: 0.5rem;
  border: 0;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  height: 2rem;
  justify-content: space-between;
  cursor: pointer;
`;

const StyledMenuButtonIconLabelContainer = styled.div`
  align-items: center;
  display: flex;
`;

const StyledIconContainer = styled.div`
  align-items: center;
  display: flex;
  padding: 0.3rem 0.5rem 0.3rem 0.5rem;
`;

const StyledMenuItems = styled(Menu.Items)<{
  children: ReactNode;
  width: number;
}>`
  background: ${({ theme }) => theme.colors.backgroundVariant};
  border-radius: 0.5rem;
  border: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  width: ${({ width }) => width}px;
`;

const StyledMenuItem = styled(Menu.Item)`
  cursor: pointer;
`;
