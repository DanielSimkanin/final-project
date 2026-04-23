/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksSchedule extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-schedule";
  }

  constructor() {
    super();
    this.games = [];
    this.loading = true;
  }

  static get properties() {
    return {
      ...super.properties,
      games: { type: Array },
      loading: { type: Boolean },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.fetchSchedule();
  }

  async fetchSchedule() {
    try {
      const res = await fetch("/api/schedule.json");
      const data = await res.json();
      this.games = data.games;
    } catch (e) {
      console.error("Failed to load schedule", e);
    } finally {
      this.loading = false;
    }
  }

  formatDate(dateStr) {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        background-color: #f0f0f0;
        padding: var(--ddd-spacing-8) var(--ddd-spacing-6);
      }

      .section-header {
        text-align: center;
        margin-bottom: var(--ddd-spacing-6);
      }

      .section-header h2 {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        color: var(--ddd-theme-default-navy, #001e44);
        margin: 0 0 var(--ddd-spacing-2) 0;
      }

      .gold-divider {
        width: 60px;
        height: 4px;
        background-color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        margin: 0 auto;
        border-radius: 2px;
      }

      .games-strip {
        display: flex;
        gap: var(--ddd-spacing-4);
        overflow-x: auto;
        padding-bottom: var(--ddd-spacing-4);
        max-width: 1200px;
        margin: 0 auto;
        scrollbar-width: thin;
      }

      .game-card {
        background-color: var(--ddd-theme-default-white, #ffffff);
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
        min-width: 200px;
        flex-shrink: 0;
        border-top: 4px solid var(--ddd-theme-default-navy, #001e44);
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        transition: transform 0.2s, box-shadow 0.2s;
      }

      .game-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.12);
      }

      .game-date {
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        background-color: var(--ddd-theme-default-navy, #001e44);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-sm);
        display: inline-block;
        margin-bottom: var(--ddd-spacing-3);
      }

      .game-opponent {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy, #001e44);
        margin: 0 0 var(--ddd-spacing-2) 0;
      }

      .game-meta {
        font-size: var(--ddd-font-size-xs);
        color: var(--ddd-theme-default-coalyGray, #3a3a3a);
        margin: var(--ddd-spacing-1) 0;
      }

      .home-badge {
        display: inline-block;
        margin-top: var(--ddd-spacing-2);
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-sm);
        text-transform: uppercase;
        letter-spacing: 1px;
      }

      .home-badge.home {
        background-color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        color: var(--ddd-theme-default-navy, #001e44);
      }

      .home-badge.away {
        background-color: #e0e0e0;
        color: var(--ddd-theme-default-coalyGray, #3a3a3a);
      }

      .loading {
        text-align: center;
        color: var(--ddd-theme-default-navy, #001e44);
        padding: var(--ddd-spacing-8);
      }
    `];
  }

  render() {
    return html`
      <div class="section-header">
        <h2>Upcoming Games</h2>
        <div class="gold-divider"></div>
      </div>
      ${this.loading
        ? html`<div class="loading">Loading schedule...</div>`
        : html`
          <div class="games-strip">
            ${this.games.map(game => html`
              <div class="game-card">
                <div class="game-date">${this.formatDate(game.date)} · ${game.time}</div>
                <p class="game-opponent">vs. ${game.opponent}</p>
                <p class="game-meta">📍 ${game.location}</p>
                <span class="home-badge ${game.home ? 'home' : 'away'}">
                  ${game.home ? 'Home' : 'Away'}
                </span>
              </div>
            `)}
          </div>
        `}
    `;
  }
}
globalThis.customElements.define(HawksSchedule.tag, HawksSchedule);