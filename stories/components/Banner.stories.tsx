import React, { ReactElement, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import styled from "styled-components";
import {
  Banner as BannerComponent,
  BannerDetailsProps,
  BannerProps,
  Button,
  Text,
} from "../../src";

export default {
  title: "Components/Banner",
  component: BannerComponent,
  argTypes: {
    onClose: {
      table: {
        disable: true,
      },
    },
    prevIcon: {
      table: {
        disable: true,
      },
    },
    nextIcon: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof BannerComponent>;

const StyledSampleBanner1Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.primary};
`;

const SampleBanner1: BannerDetailsProps = {
  heading: "Welcome to banner",
  content: (
    <StyledSampleBanner1Container>
      <StyledText>
        This is a banner component. It can appear on different pages to inform
        users about anything. There can be multiple banners on a single page.
        Banners should be shown one by one. This component has controls. There
        is a cross mark in the top right corner to close one banner. There are
        arrows in the bottom right corner to switch between banners.
      </StyledText>
      <StyledText>
        The component’s height could be changed to fit text length. Please, be
        sure you have 24px gaps between outer borders and the whole content
        inside.
      </StyledText>
      <StyledText>Have a nice day.</StyledText>
    </StyledSampleBanner1Container>
  ),
};

const SampleBanner2: BannerDetailsProps = {
  heading: "Banner 2 Heading",
  content: (
    <StyledText>
      Banner 2 Content // Lorem ipsum dolor sit amet, consectetur adipiscing
      elit. Vestibulum a imperdiet mi. Donec in vehicula dolor. Aliquam eu
      posuere lorem. Nunc vestibulum imperdiet dapibus. Ut varius finibus
      pharetra. Nam consequat sapien id dui pulvinar gravida. Sed vitae nunc
      dapibus, laoreet ex ut, tincidunt felis. Donec molestie aliquam leo id
      ornare. Aliquam auctor, odio eu interdum laoreet, enim tellus lobortis
      nulla, sed faucibus diam quam in nunc. Praesent ipsum massa, accumsan vel
      nisi ut, tristique feugiat ipsum. Etiam sit amet risus in magna viverra
      accumsan.
    </StyledText>
  ),
};

export const Banner = (args: BannerProps): ReactElement => {
  const [show, setShow] = useState(true);

  if (show) {
    return <BannerComponent {...args} onClose={() => setShow(false)} />;
  }

  return (
    <Button variant="filled" onClick={() => setShow(true)}>
      Show Banner
    </Button>
  );
};

Banner.args = {
  details: [SampleBanner1, SampleBanner2],
};
