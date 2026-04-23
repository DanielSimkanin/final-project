/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksTeamCard extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-team-card";
  }

  constructor() {
    super();
    this.players = [
      { id: 1, name: "Marcus Johnson", number: "7", position: "Quarterback", emoji: "🦅" },
      { id: 2, name: "Devon Williams", number: "12", position: "Wide Receiver", emoji: "⚡" },
      { id: 3, name: "Tyler Brooks", number: "23", position: "Running Back", emoji: "🔥" },
      { id: 4, name: "Jordan Hayes", number: "55", position: "Linebacker", emoji: "🛡️" },
      { id: 5, name: "Chris Rivera", number: "81", position: "Wide Receiver", emoji: "🎯" },
      { id: 6, name: "Anthony Scott", number: "34", position: "Cornerback", emoji: "⚔️" },
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      players: { type: Array },
    };
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        background-color: #f0f0f0;
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

      .players-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: var(--ddd-spacing-5);
        max-width: 1200px;
        margin: 0 auto;
      }

      .player-card {
        background-color: var(--ddd-theme-default-white, #ffffff);
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-5);
        text-align: center;
        box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        transition: transform 0.2s, box-shadow 0.2s;
        position: relative;
        overflow: hidden;
      }

      .player-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background-color: var(--ddd-theme-default-keystoneYellow, #e2c044);
      }

      .player-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 20px rgba(0,0,0,0.12);
      }

      .player-avatar {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: var(--ddd-theme-default-navy, #001e44);
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        margin: 0 auto var(--ddd-spacing-3);
      }

      .player-number {
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        background-color: var(--ddd-theme-default-navy, #001e44);
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-sm);
        display: inline-block;
        margin-bottom: var(--ddd-spacing-2);
      }

      .player-name {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy, #001e44);
        margin: 0 0 var(--ddd-spacing-1) 0;
      }

      .player-position {
        font-size: var(--ddd-font-size-xs);
        color: #888;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
    `];
  }

  render() {
    return html`
      <div class="section-header">
        <h2>Meet the Team</h2>
        <div class="gold-divider"></div>
      </div>
      <div class="players-grid">
        ${this.players.map(player => html`
          <div class="player-card">
            <div class="player-avatar">${player.emoji}</div>
            <div class="player-number">#${player.number}</div>
            <h3 class="player-name">${player.name}</h3>
            <div class="player-position">${player.position}</div>
          </div>
        `)}
      </div>
    `;
  }
}
globalThis.customElements.define(HawksTeamCard.tag, HawksTeamCard);