import { make, highlightSettingIcon } from '@groupher/editor-utils'

/**
 * Build styles
 */
import  './index.css'
import PaperIcon from './icon/paper.svg'
import QuoteIcon from './icon/quote.svg'

/**
 * @class Quote
 * @classdesc Quote Tool for Editor.js
 * @property {QuoteData} data - Tool`s input and output data
 * @propert {object} api - Editor.js API instance
 *
 * @typedef {object} QuoteData
 * @description Quote Tool`s input and output data
 * @property {string} text - quote`s text
 *
 * @typedef {object} QuoteConfig
 * @description Quote Tool`s initial configuration
 */
export default class Quote {
  /**
   * Get Tool toolbox settings
   * icon - Tool icon's SVG
   * title - title to show in toolbox
   *
   * @return {{icon: string, title: string}}
   */
  static get toolbox() {
    return {
      /* icon: '<svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg"><path d="M13.53 6.185l.027.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.569-1.568l4.838-4.837L6.396 2.23A1.125 1.125 0 1 1 7.986.64l5.52 5.518.025.027zm-5.815 0l.026.025a1.109 1.109 0 0 1 0 1.568l-5.644 5.644a1.109 1.109 0 1 1-1.568-1.568l4.837-4.837L.58 2.23A1.125 1.125 0 0 1 2.171.64L7.69 6.158l.025.027z" /></svg>', */
      icon: '<svg t="1570603614482" class="icon" width="15" height="14" viewBox="0 0 1210 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4264" width="200" height="200"><path d="M517.587974 506.412527a134.482163 134.482163 0 0 0-98.857417-40.735469h-162.841665a69.545917 69.545917 0 0 1-69.796443-69.796443v-23.24878a186.14055 186.14055 0 0 1 186.14055-186.090444h46.497558a47.249136 47.249136 0 0 0 46.547664-46.547664V46.948505a47.249136 47.249136 0 0 0-46.547664-46.547664h-46.497558a362.159864 362.159864 0 0 0-144.302768 29.461815A368.423005 368.423005 0 0 0 29.463819 228.329067 362.310179 362.310179 0 0 0 0.002004 372.631835v511.773776a138.991625 138.991625 0 0 0 139.592886 139.592886h279.135667a138.991625 138.991625 0 0 0 139.592886-139.592886V605.269944a134.482163 134.482163 0 0 0-40.735469-98.857417z m651.366662 0a134.482163 134.482163 0 0 0-98.857417-40.735469h-162.841666a69.545917 69.545917 0 0 1-69.796443-69.796443v-23.24878a186.14055 186.14055 0 0 1 186.14055-186.090444h46.497559a47.249136 47.249136 0 0 0 46.547663-46.547664V46.948505a47.249136 47.249136 0 0 0-46.547663-46.547664h-46.497559a362.159864 362.159864 0 0 0-144.302768 29.461815 368.423005 368.423005 0 0 0-198.466411 198.466411A362.310179 362.310179 0 0 0 651.368666 372.631835v511.773776a138.991625 138.991625 0 0 0 139.592886 139.592886h279.135667a138.991625 138.991625 0 0 0 139.592886-139.592886V605.269944a134.482163 134.482163 0 0 0-40.735469-98.857417z" fill="" p-id="4265"></path></svg>',
      title: this.i18n === 'en' ? 'Quote' : '引用',
    };
  }

  /**
   * Empty Quote is not empty Block
   * @public
   * @returns {boolean}
   */
  static get contentless() {
    return true;
  }

  /**
   * Allow to press Enter inside the Quote
   * @public
   * @returns {boolean}
   */
  static get enableLineBreaks() {
    return true;
  }

  /**
   * Allow Quote to be converted to/from other blocks
   */
  static get conversionConfig(){
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: 'text',
      /**
       * To create string from Quote data, concatenate text and caption
       * @param {QuoteData} quoteData
       * @return {string}
       */
      export: function (quoteData) {
        return quoteData.caption ? `${quoteData.text} — ${quoteData.caption}` : quoteData.text;
      }
    };
  }

  /**
   * Render plugin`s main Element and fill it with saved data
   *
   * @param {{data: QuoteData, config: QuoteConfig, api: object}}
   *   data — previously saved data
   *   config - user config for Tool
   *   api - Editor.js API
   */
  constructor({data, config, api}) {
    this.api = api;
    this.i18n = config.i18n || 'en'

    this.data = {
      text: data.text || '',
      type: data.type || 'short', // 'short' || 'part'
      caption: data.caption || 'someone',
    };

    this.settings = [
      {
        name: 'short',
        title: '短引用',
        icon: QuoteIcon,
        type: 'short'
      },
      {
        name: 'paper',
        title: '长文引用',
        icon: PaperIcon,
        type: 'paper'
      },
    ]
  }

  /**
   * Tool`s styles
   *
   * @returns {{block: string, wrapper: string, quote: string, input: string, settingsButton: string, settingsButtonActive: string}}
   */
  get CSS() {
    return {
      block: this.api.styles.block,
      wrapper: 'cdx-quote-paper', // 'cdx-quote',
      text: 'cdx-quote-papper__text', // 'cdx-quote__text',
      input: this.api.styles.input,

      // 
      quoteSource: 'cdx-quote-source',
      customSettingWrapper: 'custom-setting-wrapper',

      quoteSourceLine: "cdx-quote-source__line",
      quoteSourceText: "cdx-quote-source__text",

      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,
    };
  }

  /**
   * Create Quote Tool container with inputs
   *
   * @returns {Element}
   */
  render() {
    const Wrapper = make('div', [this.CSS.block]);
    const Blockquote = make('blockquote', [this.CSS.wrapper]);

    const Quote = make('div', [this.CSS.input, this.CSS.text], {
      innerText: this.data.text || "",
      contentEditable: true,
      placeholder: "引用内容。",
    });

    // bottom source
    const QuoteSource = make('div', [this.CSS.quoteSource])
    const QuoteSourceLine = make('div', [this.CSS.quoteSourceLine])
    const QuoteSourceText = make('div', [this.CSS.quoteSourceText], {
      contentEditable: true,
      innerText: '',
      placeholder: "引用来源",
    })

    QuoteSource.appendChild(QuoteSourceLine);
    QuoteSource.appendChild(QuoteSourceText);

    Blockquote.appendChild(Quote);
    Blockquote.appendChild(QuoteSource);

    Wrapper.appendChild(Blockquote);

    return Wrapper;
  }

  /**
   * Create Quote Tool settings
   *
   * @returns {Element}
   */
  renderSettings() {
    const Wrapper = make('div', [this.CSS.customSettingWrapper])

    this.settings.forEach( (item) => {
      const itemEl = make('div', [this.CSS.settingsButton], {
        innerHTML: item.icon
      });

      if (this.data.type === item.name) highlightSettingIcon(itemEl, this.api)

      this.api.tooltip.onHover(itemEl, item.title, { placement: 'top' });
      itemEl.addEventListener('click', () => {
        // this.setCenterIcon(item.name);
        highlightSettingIcon(itemEl, this.api)
      });

      Wrapper.appendChild(itemEl);
    })
    
    return Wrapper
  }

  /**
   * Extract Quote data from Quote Tool element
   *
   * @param {HTMLDivElement} quoteElement - element to save
   * @returns {QuoteData}
   */
  save(quoteElement) {
    const text = quoteElement.querySelector(`.${this.CSS.text}`);

    return Object.assign(this.data, {
      text: text.innerHTML,
    });
  }

  /**
   * Sanitizer rules
   */
  static get sanitize2() {
    return {
      text: {
        br: true,
      },
    };
  }
}
