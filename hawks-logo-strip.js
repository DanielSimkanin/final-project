/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksLogoStrip extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-logo-strip";
  }

  constructor() {
    super();
    this.sponsors = [
      { name: "Harrisburg Parks & Rec", emoji: "🏟️" },
      { name: "Capital City Sports", emoji: "🏆" },
      { name: "Keystone Athletics", emoji: "⚽" },
      { name: "Penn State Health", emoji: "🏥" },
      { name: "Riverside Grille", emoji: "🍔" },
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      sponsors: { type: Array },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-default-lightGray);
        padding: var(--ddd-spacing-6) var(--ddd-spacing-6);
      }

      .section-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-6);
      }

      .section-header h2 {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        color: var(--ddd-theme-default-navy);
        margin: 0 0 var(--ddd-spacing-2) 0;
        letter-spacing: 2px;
      }

      .sponsors-strip {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--ddd-spacing-6);
        max-width: 1200px;
        margin: 0 auto;
      }

      .sponsor-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-5);
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-lg);
        box-shadow: var(--ddd-boxShadow-sm);
        min-width: 140px;
        text-align: center;
      }

      .sponsor-emoji {
        font-size: 2rem;
      }

      .sponsor-name {
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      :host-context(body.dark) {
        :host {
          background-color: var(--ddd-theme-default-nittanyNavy);
        }
        .section-header h2 {
          color: var(--ddd-theme-default-white);
        }
        .sponsor-item {
          background-color: var(--ddd-theme-default-white);
        }
        .sponsor-name {
          color: var(--ddd-theme-default-nittanyNavy);
        }
      }
    `];
  }

  render() {
    return html`
      <div class="section-header">
        <h2>Our Sponsors</h2>
      </div>
      <div class="sponsors-strip">
        ${this.sponsors.map(s => html`
          <div class="sponsor-item">
            <span class="sponsor-emoji">${s.emoji}</span>
            <span class="sponsor-name">${s.name}</span>
          </div>
        `)}
      </div>
    `;
  }
}
globalThis.customElements.define(HawksLogoStrip.tag, HawksLogoStrip);