import "./globals.css";
import { Header, SessionProvider, Login, DevelopedBy } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";

export const metadata = {
  title: "Dall.E 2",
  description: "AI Image Generation Tool",
  authors: [{ name: "Er. Sumit Kumar" }],
  keywords: ["openai", "AI image generation"],
  colorScheme: "light",
  twitter: {
    card: "summary_large_image",
    title: "Dall.E 2",
    description: "AI Image Generation Tool",
    creator: "@risesumit",
    images: ["https://nextjs.org/og.png"],
  },
  openGraph: {
    title: "Dall.E 2",
    description: "AI Image Generation Tool",
    url: "https://dalle-sumit.up.railway.app",
    siteName: "Dall.E 2",
    images: [
      {
        url: "https://i.postimg.cc/xjxPr0ys/Untitled-design-10.png",
        width: "200",
        height: "200",
        alt: "Dall.E 2 - AI Image Generation Tool",
      },
      {
        url: "https://i.postimg.cc/yxFpPt2q/Copy-of-Developed-By.png",
        width: "1289",
        height: "640",
        alt: "Dall.E 2 - AI Image Generation Tool",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
  },
  alternates: {
    canonical: "https://dalle-sumit.up.railway.app",
  },
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
