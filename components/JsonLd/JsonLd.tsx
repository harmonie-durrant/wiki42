/**
 * Structured data for search engines (https://schema.org, in JSON-LD). Google reads it to
 * understand what a page is, and uses it for rich results such as breadcrumbs.
 *
 * A server component: the script is in the HTML sent to crawlers and never runs in the browser.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // `<` is escaped so that page text can never close the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
