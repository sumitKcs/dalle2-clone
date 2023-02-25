import "./globals.css";
import { Header } from "@/components";

export const metadata = {
  title: "Dall-E 2",
  description: "Ai Image Generation Tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
          {children}
        </main>
      </body>
    </html>
  );
}
