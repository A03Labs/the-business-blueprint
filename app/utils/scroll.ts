/**
 * Programmatic smooth scrolling utility that does NOT use or append '#' to the URL.
 */
export function scrollToSection(id: string, offset: number = 84) {
  if (typeof window === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition >= 0 ? offsetPosition : 0,
    behavior: "smooth",
  });
}

export function scrollToTop() {
  if (typeof window === "undefined") return;
  window.scrollTo({ top: 0, behavior: "smooth" });
}
