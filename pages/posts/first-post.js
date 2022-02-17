import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layouts";

export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First post title</title>
            </Head>
            <h1>First post</h1>
            <h2>
                <Link href="/">
                    <a>Back home</a>
                </Link>
            </h2>
        </Layout>
    );
}