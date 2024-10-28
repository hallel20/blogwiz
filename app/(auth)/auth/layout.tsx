import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyberwizdev Blog",
  description: "Blog for real time new tech updates",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
