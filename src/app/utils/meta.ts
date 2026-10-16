interface MetaOptions {
  title?: string;
  description?: string;
  image?: string;
  type?: string;
  url?: string;
}

const setMeta = (attr: string, value: string, key: 'name' | 'property' = 'name') => {
  let el = document.querySelector(`meta[${key}="${attr}"]`) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(key, attr);
    document.head.appendChild(el);
  }
  el.content = value;
};

export function updatePageMeta({ title, description, image, type, url }: MetaOptions) {
  const siteTitle = 'Trash Bin';
  const fullTitle = title ? `${title} — ${siteTitle}` : `${siteTitle} — Movie Collection`;
  const desc = description ?? 'A curated personal movie collection. Browse, rate, review, and discover films.';
  const img = image ?? 'https://i.imgur.com/vUiVqow.png?direct';
  const pageUrl = url ?? window.location.href;

  document.title = fullTitle;

  setMeta('description', desc);
  setMeta('og:title', fullTitle, 'property');
  setMeta('og:description', desc, 'property');
  setMeta('og:image', img, 'property');
  setMeta('og:url', pageUrl, 'property');
  setMeta('og:type', type ?? 'website', 'property');
  setMeta('twitter:title', fullTitle);
  setMeta('twitter:description', desc);
  setMeta('twitter:image', img);
}

export function resetPageMeta() {
  updatePageMeta({});
}
