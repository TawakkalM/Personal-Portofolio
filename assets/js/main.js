import { siteConfig } from "./site-config.js";

function setOptionalLink(selector, url) {
  document.querySelectorAll(selector).forEach((element) => {
    if (typeof url === "string" && url.trim() !== "") {
      element.href = url;
      element.hidden = false;
    } else {
      element.hidden = true;
      element.removeAttribute("href");
    }
  });
}

function setupContactLinks() {
  const email = siteConfig.email.trim();
  const emailLink = document.querySelector("[data-email-link]");
  const emailText = document.querySelector("[data-email-text]");

  if (emailLink && emailText && email) {
    emailLink.href = `mailto:${email}?subject=${encodeURIComponent("Hello Tawakkal")}`;
    emailText.textContent = email;
  } else if (emailLink) {
    emailLink.hidden = true;
  }

  setOptionalLink('[data-social="linkedin"]', siteConfig.social.linkedin);
  setOptionalLink('[data-social="github"]', siteConfig.social.github);
  setOptionalLink("[data-resume]", siteConfig.resumeUrl);

  const projectLinks = {
    "rancangRekaRuang.demo": siteConfig.projects.rancangRekaRuang.demo,
    "rancangRekaRuang.repository": siteConfig.projects.rancangRekaRuang.repository,
    "bbgtk.demo": siteConfig.projects.bbgtk.demo,
    "bbgtk.repository": siteConfig.projects.bbgtk.repository,
  };
  Object.entries(projectLinks).forEach(([key, url]) => {
    setOptionalLink(`[data-project-link="${key}"]`, url);
  });
}

function setupCurrentYear() {
  const year = String(new Date().getFullYear());
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = year;
  });
}

function setupScrollReveal() {
  const revealItems = document.querySelectorAll("[data-reveal]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  document.documentElement.classList.add("js-ready");
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -32px 0px" });

  revealItems.forEach((element) => observer.observe(element));
}

function setupActiveNavigation() {
  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...document.querySelectorAll('.site-header a[href^="#"]')];

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const sectionId = entry.target.id;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${sectionId}`;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-25% 0px -65% 0px", threshold: 0 });

  sections.forEach((section) => observer.observe(section));
}

setupContactLinks();
setupCurrentYear();
setupScrollReveal();
setupActiveNavigation();
