import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Icon } from "../src/components";
import { ArrowIconProps } from "../src/components/Icon/Arrow";
import { ChevronIconProps } from "../src/components/Icon/Chevron";
import { IconDirection } from "../src/components/Icon/Direction";
import { IconProps } from "../src/components/Icon/Icon";

export default {
  title: "Components/Icon",
  component: Icon.Arrow,
  argTypes: {
    size: {
      control: "number",
    },
  },
} as ComponentMeta<typeof Icon.Arrow>;

export const AddIcon = (args: IconProps): React.ReactElement => (
  <Icon.Add {...args} />
);
export const ArbitrumIcon = (args: IconProps): React.ReactElement => (
  <Icon.Arbitrum {...args} />
);
export const ArrowIcon = (args: ArrowIconProps): React.ReactElement => (
  <Icon.Arrow {...args} />
);
export const CheckmarkIcon = (args: IconProps): React.ReactElement => (
  <Icon.Checkmark {...args} />
);
export const ChevronIcon = (args: ChevronIconProps): React.ReactElement => (
  <Icon.Chevron {...args} />
);
export const CopyIcon = (args: IconProps): React.ReactElement => (
  <Icon.Copy {...args} />
);
export const CrossMarkIcon = (args: IconProps): React.ReactElement => (
  <Icon.CrossMark {...args} />
);
export const DiscordIcon = (args: IconProps): React.ReactElement => (
  <Icon.Discord {...args} />
);
export const ErrorIcon = (args: IconProps): React.ReactElement => (
  <Icon.Error {...args} />
);
export const EthereumIcon = (args: IconProps): React.ReactElement => (
  <Icon.Ethereum {...args} />
);
export const FantomIcon = (args: IconProps): React.ReactElement => (
  <Icon.Fantom {...args} />
);
export const GithubIcon = (args: IconProps): React.ReactElement => (
  <Icon.Github {...args} />
);
export const HomeIcon = (args: IconProps): React.ReactElement => (
  <Icon.Home {...args} />
);
export const InfoIcon = (args: IconProps): React.ReactElement => (
  <Icon.Info {...args} />
);
export const IronBankIcon = (args: IconProps): React.ReactElement => (
  <Icon.IronBank {...args} />
);
export const LabIcon = (args: IconProps): React.ReactElement => (
  <Icon.Lab {...args} />
);
export const LinkOutIcon = (args: IconProps): React.ReactElement => (
  <Icon.LinkOut {...args} />
);
export const MediumIcon = (args: IconProps): React.ReactElement => (
  <Icon.Medium {...args} />
);
export const SearchIcon = (args: IconProps): React.ReactElement => (
  <Icon.Search {...args} />
);
export const SettingsIcon = (args: IconProps): React.ReactElement => (
  <Icon.Settings {...args} />
);
export const TwitterIcon = (args: IconProps): React.ReactElement => (
  <Icon.Twitter {...args} />
);
export const VaultIcon = (args: IconProps): React.ReactElement => (
  <Icon.Vault {...args} />
);
export const WalletIcon = (args: IconProps): React.ReactElement => (
  <Icon.Wallet {...args} />
);
export const WarningIcon = (args: IconProps): React.ReactElement => (
  <Icon.Warning {...args} />
);

ArrowIcon.args = {
  direction: IconDirection.Up,
};

ChevronIcon.args = {
  direction: IconDirection.Up,
};
