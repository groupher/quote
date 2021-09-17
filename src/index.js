import {
  make,
  highlightSettingIcon,
  enableCtrlEnterBreak,
} from "@groupher/editor-utils";

/**
 * Build styles
 */
import "./index.css";
import PaperIcon from "./icon/paper.svg";
import QuoteIcon from "./icon/quote.svg";

import { MODE } from "./constant";

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
      icon: QuoteIcon,
      title: "引用",
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
  static get conversionConfig() {
    return {
      /**
       * To create Quote data from string, simple fill 'text' property
       */
      import: "text",
      /**
       * To create string from Quote data, concatenate text and caption
       * @param {QuoteData} quoteData
       * @return {string}
       */
      export: function (quoteData) {
        return quoteData.caption
          ? `${quoteData.text} — ${quoteData.caption}`
          : quoteData.text;
      },
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
  constructor({ data, config, api }) {
    this.api = api;
    this.i18n = config.i18n || "en";

    this._data = {
      text: data.text || "",
      mode: data.mode || MODE.SHORT,
      caption: data.caption || "",
    };

    this.settings = [
      {
        title: "短引用",
        raw: MODE.SHORT,
        icon: QuoteIcon,
      },
      {
        title: "长文引用",
        raw: MODE.LONG,
        icon: PaperIcon,
      },
    ];

    this.element = null;
  }

  /**
   * Tool`s styles
   *
   * @returns {{block: string, wrapper: string, quote: string, input: string, settingsButton: string, settingsButtonActive: string}}
   */
  get CSS() {
    return {
      block: this.api.styles.block,
      settingsButton: this.api.styles.settingsButton,
      settingsButtonActive: this.api.styles.settingsButtonActive,

      text: "cdx-quote__text", // 'cdx-quote__text',

      // short
      shortWrapper: "cdx-quote-short",

      // long
      longWrapper: "cdx-quote-long", // 'cdx-quote',

      // caption for long mode
      caption: "cdx-quote-caption",
      captionLine: "cdx-quote-caption__line",
      captionText: "cdx-quote-caption__text",
    };
  }

  /**
   * Create Quote Tool container with inputs
   *
   * @returns {Element}
   */
  render() {
    // this.element = this.drawLongQuote();
    this.element = this.drawShortQuote();

    enableCtrlEnterBreak(this.element, this.api);

    return this.element;
  }

  /**
   * short/normal content quote style
   *
   * @returns {Element}
   */
  drawShortQuote() {
    const wrapperEl = make("div", [this.CSS.block]);
    const Blockquote = make("blockquote", [this.CSS.shortWrapper]);

    const textEl = make("div", [this.CSS.text], {
      innerText: this._data.text || "",
      contentEditable: true,
      placeholder: "// 引用内容",
      "data-skip-plus-button": true,
    });

    textEl.addEventListener("input", (e) => {
      this._data.text = e.target.innerHTML;
    });

    Blockquote.appendChild(textEl);

    wrapperEl.appendChild(Blockquote);

    this._data.mode = MODE.SHORT;
    return wrapperEl;
  }

  /**
   * long content quote style
   *
   * @returns {Element}
   */
  drawLongQuote() {
    const wrapperEl = make("div", [this.CSS.block]);
    const Blockquote = make("blockquote", [this.CSS.longWrapper]);

    const textEl = make("div", [this.CSS.text], {
      innerText: this._data.text || "",
      contentEditable: true,
      placeholder: "// 引用内容",
      "data-skip-plus-button": true,
    });

    textEl.addEventListener("input", (e) => {
      this._data.text = e.target.innerHTML;
    });

    // bottom source
    const captionEl = make("div", [this.CSS.caption]);
    const captionLineEl = make("div", [this.CSS.captionLine]);
    const captionTextEl = make("div", [this.CSS.captionText], {
      contentEditable: true,
      innerText: "",
      placeholder: "// 引用说明",
    });

    captionTextEl.addEventListener("input", (e) => {
      this._data.caption = e.target.innerHTML;
    });

    captionEl.appendChild(captionLineEl);
    captionEl.appendChild(captionTextEl);

    Blockquote.appendChild(textEl);
    Blockquote.appendChild(captionEl);

    wrapperEl.appendChild(Blockquote);

    this._data.mode = MODE.LONG;
    return wrapperEl;
  }

  // switch quote view between long / short
  switchView() {
    const { mode } = this._data;
    const newViewEl =
      mode === MODE.SHORT ? this.drawLongQuote() : this.drawShortQuote();

    this.replaceElement(newViewEl);
  }

  /**
   * replace element wrapper with new html element
   * @param {HTMLElement} node
   */
  replaceElement(node) {
    this.element.replaceWith(node);
    this.element = node;

    this.api.tooltip.hide();
    this.api.toolbar.close();
  }

  /**
   * Create Quote Tool settings
   *
   * @returns {Element}
   */
  renderSettings() {
    const wrapperEl = make("div");

    this.settings.forEach((item) => {
      const itemEl = make("div", [this.CSS.settingsButton], {
        innerHTML: item.icon,
      });

      if (this._data.mode === item.raw) highlightSettingIcon(itemEl, this.api);

      this.api.tooltip.onHover(itemEl, item.title, { placement: "top" });
      itemEl.addEventListener("click", () => {
        // this.setCenterIcon(item.name);
        highlightSettingIcon(itemEl, this.api);
        this.switchView();
      });

      wrapperEl.appendChild(itemEl);
    });

    return wrapperEl;
  }

  /**
   * Extract Quote data from Quote Tool element
   *
   * @param {HTMLDivElement} quoteElement - element to save
   * @returns {QuoteData}
   */
  save(quoteElement) {
    const textEl = quoteElement.querySelector(`.${this.CSS.text}`);
    const captionTextEl = quoteElement.querySelector(
      `.${this.CSS.captionText}`
    );

    return Object.assign(this._data, {
      text: textEl.innerHTML,
      caption: captionTextEl ? captionTextEl.innerHTML : "",
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
