import "./globals.css";
import { Header, SessionProvider, Login, DevelopedBy } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export const metadata = {
  title: "Dall.E 2 - An AI Image Generation Tool",
  description:
    "Create images by giving your prompt to the AI and the AI will generate images for you based upon the given prompt",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  console.log("session:", session);
  return (
    <html lang="en">
      <head>
        <title>DALL.E 2 - AI Image Generation Tool</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta
          property="og:title"
          content="DALL.E 2 - AI Image Generation Tool"
        />
        <meta
          property="og:image:url"
          itemProp="image"
          content="/meta-preview-dalle.png"
        />
        <meta property="og:image:width" content="1289" />
        <meta property="og:image:height" content="640" />
        <meta
          property="og:image:url"
          itemProp="image"
          content="meta-preview-dalle-200x200.png"
        />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:image:alt"
          content="DALL.E 2 - AI Image Generation Tool"
        />
        <meta property="og:description" content="Project by Er. Sumit Kumar" />
        <meta property="og:url" content="https://dalle-sumit.up.railway.app" />
        <meta property="og:type" content="website" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:card" content="summary" />
        <meta
          name="description"
          content="Create images by giving your prompt to the AI and the AI will generate images for you based upon the given prompt."
        />
        <meta name="theme-color" content="#ffffff" />
        <meta name="keywords" content="DALLE, DALLE 2, AI Image Genaration" />
        <meta name="author" content="Er. Sumit Kr." />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="canonical" href="https://dalle-sumit.up.railway.app" />
      </head>
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <>
              <Header />
              <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
                {children}
              </main>
              <footer className="flex justify-center items-center">
                <DevelopedBy />
              </footer>
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
