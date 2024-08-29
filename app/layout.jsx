import "./globals.css";
import "./main.css";
import { ThemeProvider } from "@/components/etc/theme-provider";
import NavBar from "@/components/etc/NavBar";
import { Toaster } from "@/components/ui/toaster";
import AppKitProvider from "@/context/Web3Modal";
import { headers } from "next/headers";
import { cookieToInitialState } from "wagmi";
import { config } from "@/config";

export const metadata = {
  title: "SCALYX",
  description: "SCALYX - Unleash The Dragon",
  url: "https://scalyx.io",
};

export default function RootLayout({ children }) {
  const initialState = cookieToInitialState(config, headers().get("cookie"));

  return (
    <html lang="en">
      <body className="" suppressHydrationWarning={true}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AppKitProvider initialState={initialState}>
            <NavBar />
            {children}
            <Toaster />
          </AppKitProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
