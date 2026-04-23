/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksStatCounter extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-stat-counter";
  }

  constructor() {
    super();
    this.stats = [
      { label: "Wins", value: "12" },
      { label: "Losses", value: "3" },
      { label: "Players", value: "24" },
      { label: "Championships", value: "2" },
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      stats: { type: Array },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-default-navy, #001e44);
        padding: var(--ddd-spacing-8) var(--ddd-spacing-6);
      }

      .stats-grid {
        display: flex;
        justify-content: center;
        gap: var(--ddd-spacing-8);
        flex-wrap: wrap;
        max-width: 1200px;
        margin: 0 auto;
      }

      .stat-item {
        text-align: center;
        color: var(--ddd-theme-default-white, #ffffff);
      }

      .stat-value {
        font-size: clamp(2.5rem, 5vw, 4rem);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        display: block;
        line-height: 1;
      }

      .stat-label {
        font-size: var(--ddd-font-size-s);
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-top: var(--ddd-spacing-2);
        color: rgba(255,255,255,0.75);
      }

      .divider {
        width: 1px;
        background-color: rgba(255,255,255,0.2);
        align-self: stretch;
      }

      @media (max-width: 600px) {
        .divider { display: none; }
        .stats-grid { gap: var(--ddd-spacing-6); }
      }
    `];
  }

  render() {
    return html`
      <div class="stats-grid">
        ${this.stats.map((stat, i) => html`
          <div class="stat-item">
            <span class="stat-value">${stat.value}</span>
            <div class="stat-label">${stat.label}</div>
          </div>
          ${i < this.stats.length - 1 ? html`<div class="divider"></div>` : ''}
        `)}
      </div>
    `;
  }
}
globalThis.customElements.define(HawksStatCounter.tag, HawksStatCounter);