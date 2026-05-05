/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksFooter extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-footer";
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-default-navy);
        color: #001e44;
        padding: var(--ddd-spacing-8) var(--ddd-spacing-6) var(--ddd-spacing-4);
        font-family: var(--ddd-font-navigation);
      }

      .footer-inner {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--ddd-spacing-8);
        padding-bottom: var(--ddd-spacing-6);
        border-bottom: 1px solid var(--ddd-theme-default-keystoneYellow);
      }

      .footer-brand .logo {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-keystoneYellow);
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2);
        margin-bottom: var(--ddd-spacing-3);
      }

      .footer-brand p {
        font-size: var(--ddd-font-size-xs);
        color: #001e44;
        opacity: 0.7;
        line-height: 1.6;
        margin: 0;
      }

      .footer-col h4 {
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--ddd-theme-default-keystoneYellow);
        margin: 0 0 var(--ddd-spacing-3) 0;
      }

      .footer-col ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
      }

      .footer-col ul li a {
        color: #001e44;
        text-decoration: none;
        font-size: var(--ddd-font-size-xs);
        opacity: 0.8;
        transition: opacity 0.2s;
      }

      .footer-col ul li a:hover {
        opacity: 1;
        color: var(--ddd-theme-default-keystoneYellow);
      }

      .footer-bottom {
        max-width: 1200px;
        margin: var(--ddd-spacing-4) auto 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: var(--ddd-spacing-2);
        font-size: var(--ddd-font-size-xs);
        opacity: 0.6;
      }

      :host-context(body.dark) {
        :host {
          color: var(--ddd-theme-default-white, #ffffff);
        }

        .footer-brand p,
        .footer-col ul li a,
        .footer-bottom {
          color: var(--ddd-theme-default-white, #ffffff);
          opacity: 0.8;
        }

        .footer-col h4 {
          color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        }

        .footer-col ul li a:hover {
          color: var(--ddd-theme-default-keystoneYellow, #e2c044);
          opacity: 1;
        }

        .footer-bottom {
          opacity: 0.6;
        }
      }
    `];
  }

  render() {
    return html`
      <div class="footer-inner">
        <div class="footer-brand">
          <div class="logo">🦅 Harrisburg Hawks</div>
          <p>Capital City Flag Athletics. Competing with pride in the heart of Pennsylvania since 2020.</p>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/team">Team Roster</a></li>
            <li><a href="/news">News</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>League</h4>
          <ul>
            <li><a href="/about">About CCFA</a></li>
            <li><a href="/schedule">Standings</a></li>
            <li><a href="/news">Announcements</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2026 Harrisburg Hawks · Capital City Flag Athletics</span>
        <span>Built with HAX + DDD</span>
      </div>
    `;
  }
}
globalThis.customElements.define(HawksFooter.tag, HawksFooter);