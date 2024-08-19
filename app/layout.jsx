import "./globals.css";
import "./main.css";
import { ThemeProvider } from "@/components/etc/theme-provider";
import NavBar from "@/components/etc/NavBar";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "SCALYX",
  description: "SCALYX - Unleash The Dragon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
