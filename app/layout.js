import "./globals.css";

export const metadata = {
  title: "GoBae Express | Your Go-To Bae for Every Delivery",
  description: "Delivery and booking services in Naga City and Partido Area.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
