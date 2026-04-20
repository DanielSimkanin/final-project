/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksBanner extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-banner";
  }

  constructor() {
    super();
    this.title = "Harrisburg Hawks";
    this.subtitle = "Capital City Flag Athletics";
    this.tagline = "Play Hard. Fly Higher.";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      subtitle: { type: String },
      tagline: { type: String },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
      }

      .banner {
        background-color: var(--ddd-theme-default-navy, #001e44);
        background-image: 
          radial-gradient(ellipse at top right, rgba(226, 192, 68, 0.15) 0%, transparent 60%),
          radial-gradient(ellipse at bottom left, rgba(226, 192, 68, 0.08) 0%, transparent 50%);
        color: var(--ddd-theme-default-white, #ffffff);
        padding: var(--ddd-spacing-16) var(--ddd-spacing-6);
        text-align: center;
        position: relative;
        overflow: hidden;
        min-height: 400px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--ddd-spacing-4);
      }

      .banner::before {
        content: '🦅';
        position: absolute;
        font-size: 20rem;
        opacity: 0.04;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
      }

      .subtitle {
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 4px;
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        margin: 0;
      }

      .title {
        font-size: clamp(2.5rem, 6vw, 5rem);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 2px;
        margin: 0;
        line-height: 1.1;
        color: var(--ddd-theme-default-white, #ffffff);
      }

      .title span {
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
      }

      .tagline {
        font-size: var(--ddd-font-size-m);
        color: rgba(255, 255, 255, 0.75);
        margin: 0;
        font-style: italic;
      }

      .cta-buttons {
        display: flex;
        gap: var(--ddd-spacing-4);
        margin-top: var(--ddd-spacing-4);
        flex-wrap: wrap;
        justify-content: center;
      }

      .btn-primary {
        background-color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        color: var(--ddd-theme-default-navy, #001e44);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-8);
        border: none;
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 16px rgba(226, 192, 68, 0.4);
      }

      .btn-secondary {
        background-color: transparent;
        color: var(--ddd-theme-default-white, #ffffff);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-8);
        border: 2px solid rgba(255, 255, 255, 0.5);
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 1px;
        cursor: pointer;
        text-decoration: none;
        display: inline-block;
        transition: border-color 0.2s, color 0.2s;
      }

      .btn-secondary:hover {
        border-color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
      }

      .gold-divider {
        width: 80px;
        height: 4px;
        background-color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        border-radius: 2px;
      }

      @media (max-width: 768px) {
        .banner {
          padding: var(--ddd-spacing-10) var(--ddd-spacing-4);
          min-height: 300px;
        }
        .cta-buttons {
          flex-direction: column;
          align-items: center;
        }
      }
    `];
  }

  render() {
    return html`
      <div class="banner">
        <p class="subtitle">${this.subtitle}</p>
        <h1 class="title">Harrisburg <span>Hawks</span></h1>
        <div class="gold-divider"></div>
        <p class="tagline">${this.tagline}</p>
        <div class="cta-buttons">
          <a class="btn-primary" href="/schedule">View Schedule</a>
          <a class="btn-secondary" href="/team">Meet the Team</a>
        </div>
      </div>
    `;
  }
}
globalThis.customElements.define(HawksBanner.tag, HawksBanner);