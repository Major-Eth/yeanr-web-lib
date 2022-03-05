import { ComponentMeta } from "@storybook/react";
import React from "react";
import { Icon } from "../src/components";
import { IconDirectionProps } from "../src/components/Icon/Direction";

export default {
  title: "Components/Icon",
  component: Icon.Arrow,
} as ComponentMeta<typeof Icon.Arrow>;

export const AddIcon = () => <Icon.Add />
export const ArbitrumIcon = () => <Icon.Arbitrum />
export const ArrowIcon = (args: IconDirectionProps) => <Icon.Arrow {...args} />
export const CheckmarkIcon = () => <Icon.Checkmark />
export const ChevronIcon = (args: IconDirectionProps) => <Icon.Chevron {...args} />
export const CopyIcon = () => <Icon.Copy />
export const CrossMarkIcon = () => <Icon.CrossMark />
export const DiscordIcon = () => <Icon.Discord />
export const ErrorIcon = () => <Icon.Error />
export const EtheriumIcon = () => <Icon.Etherium />
export const FantomIcon = () => <Icon.Fantom />
export const GithubIcon = () => <Icon.Github />
export const HomeIcon = () => <Icon.Home />
export const InfoIcon = () => <Icon.Info />
export const IronBankIcon = () => <Icon.IronBank />
export const LabIcon = () => <Icon.Lab />
export const LinkOutIcon = () => <Icon.LinkOut />
export const MediumIcon = () => <Icon.Medium />
export const SearchIcon = () => <Icon.Search />
export const SettingsIcon = () => <Icon.Settings />
export const TwitterIcon = () => <Icon.Twitter />
export const VaultIcon = () => <Icon.Vault />
export const WalletIcon = () => <Icon.Wallet />
export const WarningIcon = () => <Icon.Warning />

ArrowIcon.args = {
  direction: 'down'
}

ChevronIcon.args = {
  direction: 'up'
}
