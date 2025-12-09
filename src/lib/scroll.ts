export const scrollToElement = (
  element: HTMLElement,
  options?: {
    offset?: number;
    behavior?: ScrollBehavior;
  }
): void => {
  const { offset = 0, behavior = 'smooth' } = options || {};
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition + offset;

  window.scrollTo({
    top: offsetPosition,
    behavior,
  });
};

export const scrollToElementById = (
  elementId: string,
  options?: {
    offset?: number;
    behavior?: ScrollBehavior;
  }
): void => {
  const element = document.getElementById(elementId);
  if (element) {
    scrollToElement(element, options);
  }
};

export const scrollToSelector = (
  selector: string,
  options?: {
    offset?: number;
    behavior?: ScrollBehavior;
  }
): void => {
  const element = document.querySelector<HTMLElement>(selector);
  if (element) {
    scrollToElement(element, options);
  }
};

export const scrollToTop = (behavior: ScrollBehavior = 'smooth'): void => {
  window.scrollTo({
    top: 0,
    behavior,
  });
};
