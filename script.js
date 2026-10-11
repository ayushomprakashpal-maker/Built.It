
const APPS_SCRIPT_URL = "PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

const path = location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-links a").forEach(a=>{
  const href = a.getAttribute("href");
  if(href === path || (path === "" && href === "index.html")) a.classList.add("active");
});

const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");
if(menu) menu.addEventListener("click",()=>links.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.querySelectorAll("[data-form]").forEach(form=>{
  form.addEventListener("submit", async e=>{
    e.preventDefault();
    const msg = form.querySelector(".form-message");
    const btn = form.querySelector("button[type=submit]");
    if(APPS_SCRIPT_URL.includes("PASTE_YOUR")){
      msg.style.display="block";
      msg.textContent="Demo mode: add your Google Apps Script Web App URL in script.js to store this submission.";
      return;
    }
    btn.disabled=true; btn.textContent="Sending…";
    const data = new URLSearchParams(new FormData(form));
    try{
      await fetch(APPS_SCRIPT_URL,{method:"POST",body:data,mode:"no-cors"});
      msg.style.display="block";
      msg.textContent="Sent! Your response has been recorded.";
      form.reset();
    }catch(err){
      msg.style.display="block";
      msg.textContent="Could not send right now. Please check your Apps Script URL and deployment.";
    }finally{
      btn.disabled=false; btn.textContent="Submit →";
    }
  });
});

document.querySelectorAll(".tab").forEach(tab=>{
  tab.addEventListener("click",()=>{
    document.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    document.querySelectorAll(".form-panel").forEach(p=>p.style.display="none");
    tab.classList.add("active");
    document.getElementById(tab.dataset.target).style.display="block";
  });
});
