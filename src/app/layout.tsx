import "./globals.css";
import { Inter } from "next/font/google";
import ReduxContainer from "../../components/redux/reduxComponents/reduxcontainer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "New project",
  description: "I make my first hardcore project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxContainer>{children}</ReduxContainer>
      </body>
    </html>
  );
}
