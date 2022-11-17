import { Helmet } from "react-helmet";

function SEO(props) {
  const { ...customMeta } = props;
  const meta = {
    title: "Perpetual Swaps",
    description: `Trade spot or perpetual BTC, ETH and other top cryptocurrencies with up to 30x leverage directly from your wallet on Arbitrum.`,
    type: "exchange",
    ...customMeta,
  };
  const defaultImage = "https://swaps.mycelium.xyz/opengraph.png";
  const image = !!meta.image ? meta.image : defaultImage;
  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={meta.description} />

      <meta property="og:url" content="https://swaps.mycelium.xyz" />
      <meta property="og:type" content={meta.type} />
      <meta property="og:site_name" content="Arbitrex Perpetual DEX" />
      <meta property="og:description" content={meta.description} />
      <meta property="og:title" content={meta.title} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mycelium_xyz" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}

export default SEO;
