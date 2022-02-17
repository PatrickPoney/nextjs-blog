import Head from "next/head";
import Link from "next/link";
import Layout, {siteTitle} from "../components/layouts";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
            <p>
                <Link href="/posts/first-post">
                    <a>Plop</a>
                </Link>
            </p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
  )
}
