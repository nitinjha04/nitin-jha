import "./globals.css";

// components
import Navbar from "@/components/Navbar";
// import Footer from "./components/Footer";
// import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL("https://sahilverma.dev"),
  title: {
    default: "Nitin Jha - Home",
    template: `Nitin Jha - %s`,
  },
  description:
    "Hello, I'm Nitin Jha. - I'm a full stack developer from Himachal Pradesh India.",
  openGraph: {
    images: ["/images/open-graph.png"],
  },
  verification: {
    google: "",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <GoogleAnalytics /> */}

      <body>
        <Navbar />
        <main className="">{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
