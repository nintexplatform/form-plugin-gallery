import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './iframe';
import { NintexGalleryIframe } from './iframe';

export default {
  title: 'IFrame',
  component: 'nintex-gallery-iframe',
} as Meta;

const Template: Story<NintexGalleryIframe> = ({ description, src, height }) => {
  return html`<nintex-gallery-iframe
    .description=${description}
    .src=${src}
    .height=${height}
  >
  </nintex-gallery-iframe>`;
};

export const Base: Story<NintexGalleryIframe> = Template.bind({});
Base.args = {
  src: 'https://www.wikipedia.org/',
  height: 500,
  description: 'description',
};
