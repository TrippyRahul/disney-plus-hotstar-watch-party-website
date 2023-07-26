import Schema from "./Schema";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Enjoy movie hub with Disney plus watch party",
  description:
    "Disney+ Watch Party lets subscribers watch movies/shows with friends in real-time, sync playback, chat, audio/video calls, and share magical moments together. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/logo.svg" />
        <link
          rel="canonical"
          href="https://www.disneyplushotstarwatchparty.com/"
        />

        <meta
          property="og:url"
          content="https://www.disneyplushotstarwatchparty.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Disney plus watch party " />
        <meta
          property="og:description"
          content="Disney+ Watch Party lets subscribers watch movies/shows with friends in real-time, sync playback, chat, audio/video calls, and share magical moments together. "
        />
        <meta
          property="og:image"
          content="https://www.disneyplushotstarwatchparty.com/footer-logo.svg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="disneyplushotstarwatchparty.com"
        />
        <meta
          property="twitter:url"
          content="https://www.disneyplushotstarwatchparty.com/"
        />
        <meta name="twitter:title" content="Disney plus watch party " />
        <meta
          name="twitter:description"
          content="Disney+ Watch Party lets subscribers watch movies/shows with friends in real-time, sync playback, chat, audio/video calls, and share magical moments together. "
        />
        <meta
          name="twitter:image"
          content="https://www.disneyplushotstarwatchparty.com/footer-logo.svg"
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
