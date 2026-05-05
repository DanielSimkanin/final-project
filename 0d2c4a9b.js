function n(){const e=window.location.pathname;return e==="/schedule"?"schedule":e==="/team"?"team":e==="/news"?"news":e==="/about"?"about":"home"}function s(){const e=n(),t=document.getElementById("app-content");e==="home"?t.innerHTML=`
          <hawks-banner></hawks-banner>
          <hawks-stat-counter></hawks-stat-counter>
          <hawks-schedule></hawks-schedule>
          <hawks-news-card></hawks-news-card>
          <hawks-link-card></hawks-link-card>
          <hawks-team-card></hawks-team-card>
          <hawks-content-page></hawks-content-page>
          <hawks-logo-strip></hawks-logo-strip>
        `:e==="schedule"?t.innerHTML=`
          <hawks-schedule></hawks-schedule>
        `:e==="team"?t.innerHTML=`
          <hawks-team-card></hawks-team-card>
        `:e==="news"?t.innerHTML=`
          <hawks-news-card></hawks-news-card>
        `:e==="about"&&(t.innerHTML=`
          <hawks-content-page></hawks-content-page>
          <hawks-logo-strip></hawks-logo-strip>
        `)}document.addEventListener("click",e=>{const t=e.target.closest("a[href]");if(!t)return;const a=t.getAttribute("href");a&&a.startsWith("/")&&!a.startsWith("//")&&(e.preventDefault(),window.history.pushState({},"",a),s())}),window.addEventListener("popstate",s),s();
