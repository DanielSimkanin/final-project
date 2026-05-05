/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksLinkCard extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-link-card";
  }

  constructor() {
    super();
    this.links = [
      { label: "View Schedule", href: "/schedule", icon: "📅", desc: "See upcoming games" },
      { label: "Meet the Team", href: "/team", icon: "👥", desc: "Roster and player bios" },
      { label: "Latest News", href: "/news", icon: "📰", desc: "Updates and recaps" },
      { label: "About the League", href: "/about", icon: "🏆", desc: "Capital City Flag Athletics" },
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      links: { type: Array },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        background-color: #001e44;
        padding: var(--ddd-spacing-10) var(--ddd-spacing-6);
      }

      .section-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-8);
      }

      .section-header h2 {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        color: var(--ddd-theme-default-white);
        margin: 0 0 var(--ddd-spacing-2) 0;
      }

      .gold-divider {
        width: 60px;
        height: 4px;
        background-color: var(--ddd-theme-default-keystoneYellow);
        margin: 0 auto;
        border-radius: var(--ddd-radius-xs);
      }

      .links-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: var(--ddd-spacing-5);
        max-width: 1200px;
        margin: 0 auto;
      }

      .link-card {
        background-color: var(--ddd-theme-default-white);
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-5);
        text-align: center;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--ddd-spacing-3);
        box-shadow: var(--ddd-boxShadow-sm);
        transition: transform 0.2s;
        border-bottom: var(--ddd-spacing-1) solid var(--ddd-theme-default-keystoneYellow);
      }

      .link-card:hover {
        transform: translateY(-4px);
      }

      .link-icon {
        font-size: 2.5rem;
      }

      .link-label {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-nittanyNavy);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .link-desc {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-coalyGray);
      }

      :host-context(body.dark) {
        .link-card {
          background-color: var(--ddd-theme-default-white);
        }
        .link-label {
          color: var(--ddd-theme-default-nittanyNavy);
        }
      }
    `];
  }

  render() {
    return html`
      <div class="section-header">
        <h2>Explore the Hawks</h2>
        <div class="gold-divider"></div>
      </div>
      <div class="links-grid">
        ${this.links.map(link => html`
          <a class="link-card" href="${link.href}">
            <span class="link-icon">${link.icon}</span>
            <span class="link-label">${link.label}</span>
            <span class="link-desc">${link.desc}</span>
          </a>
        `)}
      </div>
    `;
  }
}
globalThis.customElements.define(HawksLinkCard.tag, HawksLinkCard);