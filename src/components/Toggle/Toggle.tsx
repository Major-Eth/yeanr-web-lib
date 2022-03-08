import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import styled, { css } from "styled-components"

export type ToggleProps = {
    onCheck: (enabled: boolean) => void
    checked: boolean
    width?: number
    height?: number
}

const StyledSwitch = styled(Switch)<ToggleProps>`
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .2s;
    transition-property: background-color,border-color,color,fill,stroke;
    border-radius: 9999px;
    border-color: transparent;
    background-color: ${({checked}) => checked ? 'blue' : 'green'};
    width: ${({ width }) => width + "px"};
    height: ${({ height }) => height + "px"};
    position: relative;
    display: inline-flex;
    flex-shrink: 0;
    border-width: 2px;
    border: 0px;
    cursor: pointer;
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 200ms;
    outline: 2px solid transparent;
    outline-offset: 2px;
`

const StyledSpan = styled.span`
    ${({ width, height, checked }: ToggleProps) => css`
        pointer-events: none;
        display: inline-block;
        height: ${height}px;
        width: ${width}px;
        border-radius: 9999px;
        background-color: white;
        box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 200ms;
        transform: ${checked ? 'translateX(0px)' : 'translateX(2.25rem)'};
        box-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    `}
`

export const Toggle = (props: ToggleProps) => {
    console.log(props.checked)
    return (
        <StyledSwitch
            checked={props.checked}
            onChange={props.onCheck}
            height={34}
            width={74}
            // className={`focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <StyledSpan
                checked={props.checked}
                // onCheck={props.onCheck}
                aria-hidden="true"
                height={34}
                width={34}
                // className={`${enabled ? 'translate-x-9' : 'translate-x-0'}`}
            />
        </StyledSwitch>
    )
}
