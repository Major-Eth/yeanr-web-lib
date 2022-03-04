import { ComponentMeta } from "@storybook/react";
import React from "react";
import {
    Add as AddIconComponent,
    Arbitrum as ArbitrumIconComponent,
    Arrow as ArrowIconComponent,
    Checkmark as CheckmarkIconComponent,
    Chevron as ChevronIconComponent,
    Copy as CopyIconComponent,
    CrossMark as CrossMarkIconComponent,
    Discord as DiscordIconComponent,
    Error as ErrorIconComponent,
    Etherium as EtheriumIconComponent,
    Fantom as FantomIconComponent,
    Github as GithubIconComponent,
    Home as HomeIconComponent,
    Info as InfoIconComponent,
    IronBank as IronBankIconComponent,
    Lab as LabIconComponent,
    LinkOut as LinkOutIconComponent,
    Medium as MediumIconComponent,
    Search as SearchIconComponent,
    Settings as SettingsIconComponent,
    Twitter as TwitterIconComponent,
    Vault as VaultIconComponent,
    Wallet as WalletIconComponent,
    Warning as WarningIconComponent,
} from "../src";
import { ArrowIconProps } from "../src/components/Icon/Arrow";
import { ChevronIconProps } from "../src/components/Icon/Chevron";

export default {
  title: "Components/Icon",
  component: ArrowIconComponent,
} as ComponentMeta<typeof ArrowIconComponent>;

export const AddIcon = () => <AddIconComponent />
export const ArbitrumIcon = () => <ArbitrumIconComponent />
export const ArrowIcon = (args: ArrowIconProps) => <ArrowIconComponent {...args} />
export const CheckmarkIcon = () => <CheckmarkIconComponent />
export const ChevronIcon = (args: ChevronIconProps) => <ChevronIconComponent {...args} />
export const CopyIcon = () => <CopyIconComponent />
export const CrossMarkIcon = () => <CrossMarkIconComponent />
export const DiscordIcon = () => <DiscordIconComponent />
export const ErrorIcon = () => <ErrorIconComponent />
export const EtheriumIcon = () => <EtheriumIconComponent />
export const FantomIcon = () => <FantomIconComponent />
export const GithubIcon = () => <GithubIconComponent />
export const HomeIcon = () => <HomeIconComponent />
export const InfoIcon = () => <InfoIconComponent />
export const IronBankIcon = () => <IronBankIconComponent />
export const LabIcon = () => <LabIconComponent />
export const LinkOutIcon = () => <LinkOutIconComponent />
export const MediumIcon = () => <MediumIconComponent />
export const SearchIcon = () => <SearchIconComponent />
export const SettingsIcon = () => <SettingsIconComponent />
export const TwitterIcon = () => <TwitterIconComponent />
export const VaultIcon = () => <VaultIconComponent />
export const WalletIcon = () => <WalletIconComponent />
export const WarningIcon = () => <WarningIconComponent />

ArrowIcon.args = {
  variant: 'down'
}

ChevronIcon.args = {
  variant: 'up'
}