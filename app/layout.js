import "./globals.css";

export const metadata = {
  title: "GoBae Express",
  description: "Your Go-To Bae for Every Delivery.",
  manifest: "/manifest.json",
  themeColor: "#ef3f83",
};
    icon: "/Gobae-logo.jpg",
    apple: "/Gobae-logo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ef3f83" />
        <meta
          name="mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-capable"
          content="yes"
        />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="default"
        />
        <meta
          name="apple-mobile-web-app-title"
          content="GoBae Express"
        />
      </head>

      <body>{children}</body>
    </html>
  );
}
