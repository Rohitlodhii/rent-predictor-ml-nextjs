
import { ThemeProvider } from "@/components/theme-provider"

import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const dmSans = DM_Sans({
  weight : ['100' , '200' , '400' , '600' ,'800']
})

export const metadata = {
  title: "Rent Predictor - ML model",
  description: "Get accurate rental price predictions for properties across India. Enter location, area, and BHK to get instant rent estimates powered by machine learning.",
  keywords: "rent predictor, rental price, property rent, real estate, AI prediction, rent calculator",
  authors: [{ name: "Rohit lodhi" }],
  openGraph: {
    title: "Rent Predictor - AI-Powered Rental Price Prediction",
    description: "Get accurate rental price predictions for properties across India. Enter location, area, and BHK to get instant rent estimates powered by machine learning.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rent Predictor - AI-Powered Rental Price Prediction",
    description: "Get accurate rental price predictions for properties across India.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${dmSans.className} antialiased`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Toaster />
          </ThemeProvider>
      </body>
    </html>
  );
}
