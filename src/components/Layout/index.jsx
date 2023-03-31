import Footer from "../Footer";
import NavBar from "../NavBar";
import Head from "next/head";
export default function Layout({children}){

    return(
        <>
            <Head>
                <link rel="favicon icon" href="/images/favicon.ico" />
                <title>PokeNext</title>
            </Head>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}