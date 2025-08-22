import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>pragyan&apos;s corner</title>
        <meta name="description" 
        content="Pragyan Yadav | UConn student researching Physics and Computer Science. Interested in AI, simulations, solar physics, and philosophy." />

        <link rel="icon" href="/docs/icon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
