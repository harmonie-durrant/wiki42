import { SkipNavContent } from 'nextra/components';
import { Container } from '@mantine/core';
import { Content } from '@/components/Content/Content';
import { JsonLd } from '@/components/JsonLd/JsonLd';
import { Welcome } from '@/components/Welcome/Welcome';
import config from '@/config';

const siteUrl = config.metadata.metadataBase.href;

export default function HomePage() {
  return (
    <Container component="main" mih="calc(100vh - 328px)">
      {/* Target of Nextra's "Skip to Content" link, which wiki pages get from their layout. */}
      <SkipNavContent />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Wiki42',
          alternateName: 'The unofficial 42 school wiki',
          url: siteUrl,
          description: config.metadata.description,
          inLanguage: 'en',
        }}
      />
      <Welcome />
      <Content />
    </Container>
  );
}
