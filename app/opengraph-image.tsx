import { ImageResponse } from 'next/og';

// The preview image for links shared on social networks and chat apps, used by every page
// (Next.js adds the og:image and twitter:image tags itself).
export const alt = 'Wiki42, the unofficial 42 school wiki';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 96,
        background: '#242424',
        color: '#ffffff',
        fontFamily: 'sans-serif',
      }}
    >
      <div style={{ display: 'flex', fontSize: 128, fontWeight: 700, letterSpacing: -4 }}>
        Wiki<span style={{ color: '#4dabf7' }}>42</span>
      </div>
      <div style={{ display: 'flex', fontSize: 48, marginTop: 24, color: '#c9c9c9' }}>
        The unofficial 42 school wiki
      </div>
      <div style={{ display: 'flex', fontSize: 32, marginTop: 48, color: '#909296' }}>
        Admissions · The Piscine · The Common Core · Guides
      </div>
    </div>,
    size
  );
}
