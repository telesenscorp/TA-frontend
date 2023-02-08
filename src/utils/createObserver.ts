function handleIntersect(entries: any[], observer: IntersectionObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.setAttribute("", true);
      observer.disconnect();
    }
  });
}
export function createObserver(element: HTMLElement) {
  let observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: 1.0,
  });
  observer.observe(element);
}
