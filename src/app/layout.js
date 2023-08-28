import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Enjoy movie hub with Disney plus watch party",
  description:
    " Disney plus watch Party allows you to see movies and shows with friends in real-time and sync playback, chat, audio, and video calls to share your moments.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link rel="canonical" href="https://www.disneyhotstarparty.com/" />

        <meta property="og:url" content="https://www.disneyhotstarparty.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Disney plus watch party " />
        <meta
          property="og:description"
          content=" Disney plus watch Party allows you to see movies and shows with friends in real-time and sync playback, chat, audio, and video calls to share your moments."
        />
        <meta
          property="og:image"
          content="https://www.disneyhotstarparty.com/footer-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="disneyhotstarparty.com/" />
        <meta
          property="twitter:url"
          content="https://www.disneyhotstarparty.com/"
        />
        <meta name="twitter:title" content="Disney plus watch party " />
        <meta
          name="twitter:description"
          content=" Disney plus watch Party allows you to see movies and shows with friends in real-time and sync playback, chat, audio, and video calls to share your moments."
        />
        <meta
          name="twitter:image"
          content="https://www.disneyhotstarparty.com/footer-logo.svg"
        />
      </head>
      <body>
        <Schema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
