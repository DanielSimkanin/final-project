/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksHeader extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-header";
  }

  constructor() {
    super();
    this.siteName = "Harrisburg Hawks";
    this.menuOpen = false;
  }

  static get properties() {
    return {
      ...super.properties,
      siteName: { type: String },
      menuOpen: { type: Boolean, reflect: true },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-default-navy, #001e44);
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        font-family: var(--ddd-font-navigation);
      }

      .header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        max-width: 1200px;
        margin: 0 auto;
      }

      .logo-area {
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-3);
        text-decoration: none;
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
      }

      .logo-icon {
        font-size: 2rem;
      }

      .site-name {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        letter-spacing: 1px;
        text-transform: uppercase;
      }

      nav {
        display: flex;
        gap: var(--ddd-spacing-4);
        align-items: center;
      }

      nav a {
        color: var(--ddd-theme-default-white, #fff);
        text-decoration: none;
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-sm);
        transition: background 0.2s;
      }

      nav a:hover {
        background-color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        color: var(--ddd-theme-default-navy, #001e44);
      }

      .menu-toggle {
        display: none;
        background: none;
        border: 2px solid var(--ddd-theme-default-keystoneYellow, #e2c044);
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        font-size: var(--ddd-font-size-m);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-3);
        border-radius: var(--ddd-radius-sm);
        cursor: pointer;
      }

      .mobile-menu {
        display: none;
        flex-direction: column;
        background-color: var(--ddd-theme-default-navy, #001e44);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-6);
      }

      .mobile-menu a {
        color: var(--ddd-theme-default-white, #fff);
        text-decoration: none;
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        padding: var(--ddd-spacing-2) 0;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }

      .mobile-menu a:hover {
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
      }

      :host([menuopen]) .mobile-menu {
        display: flex;
      }

      /* Gold accent bar at bottom of header */
      .accent-bar {
        height: 4px;
        background-color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        width: 100%;
      }

      @media (max-width: 768px) {
        nav {
          display: none;
        }
        .menu-toggle {
          display: block;
        }
      }
    `];
  }

  _toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  render() {
    return html`
      <div class="header-inner">
        <a class="logo-area" href="/">
          <span class="logo-icon">🦅</span>
          <span class="site-name">${this.siteName}</span>
        </a>
        <nav>
          <a href="/">Home</a>
          <a href="/schedule">Schedule</a>
          <a href="/team">Team</a>
          <a href="/news">News</a>
          <a href="/about">About</a>
        </nav>
        <button class="menu-toggle" @click="${this._toggleMenu}">
          ${this.menuOpen ? '✕' : '☰'}
        </button>
      </div>
      <div class="mobile-menu">
        <a href="/">Home</a>
        <a href="/schedule">Schedule</a>
        <a href="/team">Team</a>
        <a href="/news">News</a>
        <a href="/about">About</a>
      </div>
      <div class="accent-bar"></div>
    `;
  }
}
globalThis.customElements.define(HawksHeader.tag, HawksHeader);