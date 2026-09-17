import type { Metadata } from "next";
import { AssetManagers } from "@/constants/assets";
import { Roboto } from "next/font/google";
import "@/styles/global.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Providers } from "@/store/provider";
import StyledComponentsRegistry from "@/lib/registry";
import { GlobalModalManager } from "@/components/shared/modal/GlobalModalManager";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SocialMediaBar } from "@/components/layout/social-media-bar";

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: "VLXD - Anh Tuấn",
  description: "Hệ thống phân phối vật liệu xây dựng uy tín",
  icons: {
    icon: AssetManagers.icons.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={roboto.className}>
        <StyledComponentsRegistry>
          <Providers>
            {/* Layer 1: Layout Wrapper */}
            <div className="app-wrapper">
              <Header />

              {/* Layer 1: Main Content Screen */}
              <main className="main-content">
                {children}
              </main>

              <Footer />
            </div>

            {/* Floating Social Media Bar */}
            <SocialMediaBar position="bottom-right" phoneNumber="0909 746 816" />

            {/* Layer 2: Global Modal Manager */}
            <GlobalModalManager />
            <ToastContainer position="bottom-right" autoClose={3000} />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
