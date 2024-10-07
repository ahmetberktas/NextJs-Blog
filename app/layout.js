import { Inter } from "next/font/google";
import styles from "./styles.module.css";
import "./global.css";
import Head from "./head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={inter.className}>
      <Head></Head>
      <body className={styles.container}>
        <header>
          <p>Header</p>
        </header>
        <main>{children}</main>
        <footer>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
