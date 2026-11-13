import { generateStaticParamsFor, importPage } from 'nextra/pages';
import { JsonLd } from '@/components/JsonLd/JsonLd';
import config from '@/config';
import { useMDXComponents } from '../../../mdx-components';

export const generateStaticParams = generateStaticParamsFor('mdxPath');
export const revalidate = false;

const siteUrl = config.metadata.metadataBase.href;

export async function generateMetadata(props: any) {
  const params = await props.params;
  const { metadata } = await importPage(params.mdxPath);
  return metadata;
}

const Wrapper = useMDXComponents().wrapper;

/** schema.org data for a wiki page: the article itself, and its place in the site. */
function pageStructuredData(mdxPath: string[] | undefined, metadata: any) {
  const path = mdxPath?.length ? `/wiki/${mdxPath.join('/')}` : '/wiki';
  const url = new URL(path, siteUrl).href;
  const title = typeof metadata?.title === 'string' ? metadata.title : 'Wiki42';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'TechArticle',
        headline: title,
        description: metadata?.description,
        url,
        inLanguage: 'en',
        // The date of the page's last Git commit, which Nextra reads at build time.
        ...(metadata?.timestamp
          ? { dateModified: new Date(metadata.timestamp).toISOString() }
          : {}),
        author: { '@type': 'Organization', name: 'Wiki42 contributors', url: siteUrl },
        isPartOf: { '@type': 'WebSite', name: 'Wiki42', url: siteUrl },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Wiki42', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Wiki', item: new URL('/wiki', siteUrl).href },
          ...(path === '/wiki'
            ? []
            : [{ '@type': 'ListItem', position: 3, name: title, item: url }]),
        ],
      },
    ],
  };
}

export default async function Page(props: any) {
  const params = await props.params;
  const result = await importPage(params.mdxPath);
  const { default: MDXContent, toc, metadata } = result;

  const customToc = [...toc, ...((metadata as any)?.toc || [])];

  return (
    <Wrapper toc={customToc} metadata={metadata}>
      <JsonLd data={pageStructuredData(params.mdxPath, metadata)} />
      <MDXContent {...props} params={params} />
    </Wrapper>
  );
}
