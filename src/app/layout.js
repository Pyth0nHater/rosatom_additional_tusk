import "./globals.css";

export const metadata = {
  title: "Articles site",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"main"}>
        {children}
      </body>
    </html>
  );
}
