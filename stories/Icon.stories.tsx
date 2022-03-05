import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Icon } from "../src/components";
import { IconDirection, IconDirectionProps } from "../src/components/Icon/Direction";
import { IconProps } from "../src/components/Icon/Icon";

export default {
  title: "Components/Icon",
  component: Icon.Arrow,
  argTypes: {
    size: {
      control: 'number'
    }
  }
} as ComponentMeta<typeof Icon.Arrow>;

export const AddIcon = (args: IconProps) => <Icon.Add {...args} />
export const ArbitrumIcon = (args: IconProps) => <Icon.Arbitrum {...args} />
export const ArrowIcon = (args: IconDirectionProps) => <Icon.Arrow {...args} />
export const CheckmarkIcon = (args: IconProps) => <Icon.Checkmark {...args} />
export const ChevronIcon = (args: IconDirectionProps) => <Icon.Chevron {...args} />
export const CopyIcon = (args: IconProps) => <Icon.Copy {...args} />
export const CrossMarkIcon = (args: IconProps) => <Icon.CrossMark {...args} />
export const DiscordIcon = (args: IconProps) => <Icon.Discord {...args} />
export const ErrorIcon = (args: IconProps) => <Icon.Error {...args} />
export const EtheriumIcon = (args: IconProps) => <Icon.Etherium {...args} />
export const FantomIcon = (args: IconProps) => <Icon.Fantom {...args} />
export const GithubIcon = (args: IconProps) => <Icon.Github {...args} />
export const HomeIcon = (args: IconProps) => <Icon.Home {...args} />
export const InfoIcon = (args: IconProps) => <Icon.Info {...args} />
export const IronBankIcon = (args: IconProps) => <Icon.IronBank {...args} />
export const LabIcon = (args: IconProps) => <Icon.Lab {...args} />
export const LinkOutIcon = (args: IconProps) => <Icon.LinkOut {...args} />
export const MediumIcon = (args: IconProps) => <Icon.Medium {...args} />
export const SearchIcon = (args: IconProps) => <Icon.Search {...args} />
export const SettingsIcon = (args: IconProps) => <Icon.Settings {...args} />
export const TwitterIcon = (args: IconProps) => <Icon.Twitter {...args} />
export const VaultIcon = (args: IconProps) => <Icon.Vault {...args} />
export const WalletIcon = (args: IconProps) => <Icon.Wallet {...args} />
export const WarningIcon = (args: IconProps) => <Icon.Warning {...args} />

ArrowIcon.args = {
  direction: IconDirection.Up
}

ChevronIcon.args = {
  direction: IconDirection.Up
}
