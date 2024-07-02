import{i as a,S as m}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="44745838-36a359f27047326ac7e1bdda5",h="https://pixabay.com/api/";function p(o){return fetch(`${h}?key=${y}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})}let c;function g(o){const r=document.querySelector("#gallery");r.innerHTML=o.map(({largeImageURL:s,webformatURL:i,tags:e,likes:t,views:n,comments:d,downloads:f})=>`
      <a href="${s}" class="gallery-item">
        <img src="${i}" alt="${e}" loading="lazy" />
        <div class="info">
          <p><b>Likes</b>: ${t}</p>
          <p><b>Views</b>: ${n}</p>
          <p><b>Comments</b>: ${d}</p>
          <p><b>Downloads</b>: ${f}</p>
        </div>
      </a>
    `).join(""),c?c.refresh():c=new m(".gallery-item",{captionsData:"alt",captionPosition:"bottom",captionDelay:250})}const u=document.querySelector(".js-form"),l=document.querySelector("#loader"),b=document.querySelector("#gallery");u.addEventListener("submit",L);function L(o){o.preventDefault();const r=o.currentTarget.elements.query.value.trim();if(!r){a.error({title:"Error",message:"❌ Please enter a search query"});return}b.innerHTML="",l.classList.remove("hidden"),p(r).then(s=>{s.hits.length===0?a.warning({title:"No Results",message:"Sorry, there are no images matching your search query."}):g(s.hits)}).catch(q).finally(()=>{l.classList.add("hidden"),u.reset()})}function q(o){a.error({title:"Error",message:"❌ No pictures found"})}
//# sourceMappingURL=commonHelpers.js.map
