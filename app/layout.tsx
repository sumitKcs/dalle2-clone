import "./globals.css";
import { Header, SessionProvider } from "@/components";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import Login from "@/components/Login";

export const metadata = {
  title: "Dall-E 2",
  description: "Ai Image Generation Tool",
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
            </>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
