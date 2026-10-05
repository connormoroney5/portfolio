// Shared header/footer: edit the NAV list once and every page updates.
const NAV = [["index.html", "Home"], ["about.html", "About"], ["senior-design.html", "Senior Design"], ["projects.html", "Projects"], ["experience.html", "Experience"], ["resume.html", "Resume"], ["reflections.html", "Reflections"], ["ethics.html", "Ethics"]];
const here = location.pathname.split("/").pop() || "index.html";
const cur = (h) => h === here || (h === "projects.html" && /^project-\d+\.html$/.test(here));
document.getElementById("site-header").innerHTML = `<a class="skip" href="#main">Skip to content</a>
<header class="site-head"><div class="wrap"><a class="brand" href="index.html"><b>CM</b>Connor Moroney</a>
<button class="menu-btn" aria-expanded="false" aria-controls="nav">Menu</button>
<nav id="nav" aria-label="Main"><ul>${NAV.map(([h, t]) => `<li><a href="${h}"${cur(h) ? ' aria-current="page"' : ""}>${t}</a></li>`).join("")}</ul></nav></div></header>`;
document.getElementById("site-footer").innerHTML = `<footer class="site-foot"><div class="wrap"><div><p><strong>Connor Moroney</strong></p><p>Computer Engineering, Iowa State University</p></div>
<div><p><a href="mailto:cwmoroney@gmail.com">cwmoroney@gmail.com</a></p><p>(563) 542-5020</p><p><a href="https://www.linkedin.com/in/connor-moroney-563679290" target="_blank" rel="noopener noreferrer">LinkedIn</a>`;
const b = document.querySelector(".menu-btn"), n = document.getElementById("nav");
b.addEventListener("click", () => b.setAttribute("aria-expanded", n.classList.toggle("open")));
