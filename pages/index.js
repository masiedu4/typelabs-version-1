import Navbar from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
      <!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-4HD6MJBYQH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-4HD6MJBYQH');
</script>
        <title>High-Quality Documentation for SaaS - Typelabs</title>
        <meta
          name="description"
          content="Our agency specializes in creating high-quality user manuals, online help systems, and articles for SaaS. Get competitive pricing without compromising on quality."
        />
        <meta property="og:title" content="Get a Free Quote" />
        <meta
          property="og:description"
          content="High-Quality Documentation for SaaS"
        />
        <meta
          property="og:image"
          content="https://elmerlar.sirv.com/BA4CE5EA-BC98-4672-9753-B03189D4D345.png"
        />
        <meta name="twitter:card" content="summary_large_image" />

        <meta property="og:url" content="https://typelabs.io" />
        <meta property="twitter:site" content="@TypelabsHQ" />
        <meta property="twitter:title" content="Get a Free Quote" />
        <meta
          property="twitter:description"
          content="High-Quality Documentation for SaaS"
        />
        <meta
          property="twitter:image"
          content="https://elmerlar.sirv.com/BA4CE5EA-BC98-4672-9753-B03189D4D345.png"
        />
        <meta name="twitter:domain" content="typelabs.io" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Section />
      <Footer />
    </>
  );
}
