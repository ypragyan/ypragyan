import Head from "next/head";
import Layout from "../components/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SWTSA</title>
        <meta
          name="description"
          content="SWTSA is the technology club at South Windsor High School."
        />
        <link rel="icon" href="/favicon3.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
