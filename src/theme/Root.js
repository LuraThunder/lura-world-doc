import React, {useEffect} from 'react';

const BASE_URL = '/lura-world-doc';

function shouldSkip(href) {
  return (
    !href ||
    href.startsWith('#') ||
    href.startsWith('//') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    /^[a-zA-Z][a-zA-Z\d+.-]*:/.test(href) ||
    href === BASE_URL ||
    href.startsWith(`${BASE_URL}/`)
  );
}

function normalizeHref(href) {
  if (shouldSkip(href) || !href.startsWith('/')) {
    return href;
  }

  return href === '/' ? `${BASE_URL}/` : `${BASE_URL}${href}`;
}

function rewriteLinks(root) {
  if (!root?.querySelectorAll) {
    return;
  }

  root.querySelectorAll('a[href]').forEach((anchor) => {
    const currentHref = anchor.getAttribute('href');
    const normalizedHref = normalizeHref(currentHref);

    if (normalizedHref !== currentHref) {
      anchor.setAttribute('href', normalizedHref);
    }
  });
}

export default function Root({children}) {
  useEffect(() => {
    rewriteLinks(document);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            rewriteLinks(node);
          }
        });
      });
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
}
