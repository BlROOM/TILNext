import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
export const metadata = {
  title: {
    template: "%s | junyoung",
    default: "Nextjs | sucoding",
  },

  description: "First js Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <h1 className="roboto">root header</h1>
        {children}
        <h2 className={roboto.className}>root footer</h2>
      </body>
    </html>
  );
}
