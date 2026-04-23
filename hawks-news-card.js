/**
 * Copyright 2026 DanielSimkanin
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

export class HawksNewsCard extends DDDSuper(LitElement) {
  static get tag() {
    return "hawks-news-card";
  }

  constructor() {
    super();
    this.articles = [
      { id: 1, title: "Hawks Win Season Opener Against Trenton Thunder", date: "2026-04-20", summary: "The Harrisburg Hawks kicked off the season with a dominant 34-14 victory over the Trenton Thunder at Riverside Field.", category: "Game Recap" },
      { id: 2, title: "New Offensive Coordinator Joins the Hawks", date: "2026-04-15", summary: "Capital City Flag Athletics is pleased to announce the addition of Coach Marcus Webb as the Hawks new offensive coordinator.", category: "Team News" },
      { id: 3, title: "Youth Camp Registration Now Open", date: "2026-04-10", summary: "The Harrisburg Hawks are hosting their annual youth flag football camp this summer. Registration is now open for ages 6-14.", category: "Community" },
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      articles: { type: Array },
    };
  }

  formatDate(dateStr) {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  }

  static get styles() {
    return [super.styles, css`
      :host {
        display: block;
        width: 100%;
        background-color: var(--ddd-theme-default-white, #ffffff);
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

      .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--ddd-spacing-6);
        max-width: 1200px;
        margin: 0 auto;
      }

      .news-card {
        border-radius: var(--ddd-radius-lg);
        overflow: hidden;
        box-shadow: 0 2px 12px rgba(0,0,0,0.08);
        transition: transform 0.2s, box-shadow 0.2s;
        background-color: #f9f9f9;
        display: flex;
        flex-direction: column;
      }

      .news-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.12);
      }

      .card-image {
        background-color: var(--ddd-theme-default-navy, #001e44);
        height: 160px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 4rem;
      }

      .card-body {
        padding: var(--ddd-spacing-4) var(--ddd-spacing-5);
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
      }

      .card-category {
        font-size: var(--ddd-font-size-xs);
        font-weight: var(--ddd-font-weight-bold);
        text-transform: uppercase;
        letter-spacing: 1px;
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
        background-color: var(--ddd-theme-default-navy, #001e44);
        display: inline-block;
        padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
        border-radius: var(--ddd-radius-sm);
        width: fit-content;
      }

      .card-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-navy, #001e44);
        margin: 0;
        line-height: 1.3;
      }

      .card-date {
        font-size: var(--ddd-font-size-xs);
        color: #888;
      }

      .card-summary {
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-coalyGray, #3a3a3a);
        line-height: 1.6;
        margin: 0;
        flex: 1;
      }

      .read-more {
        display: inline-block;
        margin-top: var(--ddd-spacing-3);
        color: var(--ddd-theme-default-navy, #001e44);
        font-weight: var(--ddd-font-weight-bold);
        text-decoration: none;
        font-size: var(--ddd-font-size-xs);
        text-transform: uppercase;
        letter-spacing: 1px;
        border-bottom: 2px solid var(--ddd-theme-default-keystoneYellow, #e2c044);
        padding-bottom: 2px;
      }

      .read-more:hover {
        color: var(--ddd-theme-default-keystoneYellow, #e2c044);
      }
    `];
  }

  render() {
    return html`
      <div class="section-header">
        <h2>Latest News</h2>
        <div class="gold-divider"></div>
      </div>
      <div class="cards-grid">
        ${this.articles.map(article => html`
          <div class="news-card">
            <div class="card-image">🏈</div>
            <div class="card-body">
              <span class="card-category">${article.category}</span>
              <h3 class="card-title">${article.title}</h3>
              <div class="card-date">${this.formatDate(article.date)}</div>
              <p class="card-summary">${article.summary}</p>
              <a class="read-more" href="/news">Read More →</a>
            </div>
          </div>
        `)}
      </div>
    `;
  }
}
globalThis.customElements.define(HawksNewsCard.tag, HawksNewsCard);