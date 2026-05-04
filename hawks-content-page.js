/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksContentPage extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-content-page";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-10) var(--ddd-spacing-6);
      }

      .content-inner {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--ddd-spacing-10);
        align-items: center;
      }

      .content-text h2 {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        color: var(--ddd-theme-default-navy);
        margin: 0 0 var(--ddd-spacing-2) 0;
      }

      .gold-divider {
        width: 60px;
        height: 4px;
        background-color: var(--ddd-theme-default-keystoneYellow);
        border-radius: var(--ddd-radius-xs);
        margin-bottom: var(--ddd-spacing-5);
      }

      .content-text p {
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-coalyGray);
        line-height: 1.8;
        margin: 0 0 var(--ddd-spacing-4) 0;
      }

      .content-text a {
        display: inline-block;
        background-color: var(--ddd-theme-default-navy);
        color: var(--ddd-theme-default-keystoneYellow);
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        border-radius: var(--ddd-radius-sm);
        text-decoration: none;
        font-weight: var(--ddd-font-weight-bold);
        font-size: var(--ddd-font-size-s);
        text-transform: uppercase;
        letter-spacing: 1px;
        transition: transform 0.2s;
      }

      .content-text a:hover {
        transform: translateY(-2px);
      }

      .content-visual {
        background-color: var(--ddd-theme-default-navy);
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-10);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: var(--ddd-spacing-4);
        text-align: center;
        min-height: 300px;
      }

      .content-visual .big-emoji {
        font-size: 5rem;
      }

      .content-visual h3 {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-keystoneYellow);
        margin: 0;
        text-transform: uppercase;
      }

      .content-visual p {
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-white);
        margin: 0;
        opacity: 0.8;
      }

      @media (max-width: 768px) {
        .content-inner {
          grid-template-columns: 1fr;
        }
      }

      @media (prefers-color-scheme: dark) {
        :host {
          background-color: var(--ddd-theme-default-nittanyNavy);
        }
        .content-text h2 {
          color: var(--ddd-theme-default-white);
        }
        .content-text p {
          color: var(--ddd-theme-default-white);
          opacity: 0.8;
        }
      }
    `];
  }

  render() {
    return html`
      <div class="content-inner">
        <div class="content-text">
          <h2>About the Hawks</h2>
          <div class="gold-divider"></div>
          <p>The Harrisburg Hawks are a proud member of the Capital City Flag Athletics league, competing across the mid-Atlantic region. Founded in 2020, we've grown from a small community team into a championship contender.</p>
          <p>Our mission is to bring competitive, family-friendly flag football to the Harrisburg community while building lasting friendships and developing athletic talent at every level.</p>
          <a href="/about">Learn More About Us</a>
        </div>
        <div class="content-visual">
          <span class="big-emoji">🦅</span>
          <h3>Fly Higher</h3>
          <p>Competing with pride since 2020</p>
        </div>
      </div>
    `;
  }
}
globalThis.customElements.define(HawksContentPage.tag, HawksContentPage);