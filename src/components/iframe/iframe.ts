import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { PluginContract } from '@nintex/form-plugin-contract';
import { styles } from './iframe.styles';

@customElement('nintex-gallery-iframe')
export class NintexGalleryIframe extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = styles;

  @property()
  description!: string;

  @property()
  src!: string;

  @property({ type: Number })
  height: number = 500;

  static getMetaConfig(): Promise<PluginContract> | PluginContract {
    // plugin contract information
    return {
      controlName: 'IFrame',
      fallbackDisableSubmit: false,
      description: 'IFrame component which can render url view with the frame',
      iconUrl: 'one-line-text',
      groupName: 'Nintex Gallery',
      version: '1.3',
      properties: {
        src: {
          type: 'string',
          title: 'Source URL',
          description:
            'URL of the iframe, please note many sites block been rendered in iframes',
        },
        height: {
          type: 'string',
          title: 'Height',
          description: 'Height of the component',
          defaultValue: 500,
        },
      },
      standardProperties: {
        description: true,
      },
    };
  }

  // Render the UI as a function of component state
  render() {
    if (!this.src) {
      return html`<span>No source url defined</span>`;
    }

    const frameStyles = { height: this.height + 'px' };

    return html` <iframe
      class="frame"
      style=${styleMap(frameStyles)}
      allow="geolocation *; microphone; camera"
      .title="${this.description}"
      src="${this.src}"
    ></iframe>`;
  }
}
