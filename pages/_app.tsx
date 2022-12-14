import "../styles/globals.css";
import { Toaster } from "react-hot-toast";
import { UserProvider } from "../UserProvider";
import { NhostNextProvider, NhostClient } from "@nhost/nextjs";
import { MantineProvider } from "@mantine/core";

const nhost = new NhostClient({
  subdomain: process.env.NEXT_PUBLIC_NHOST_SUBDOMAIN || "",
  region: process.env.NEX_PUBLIC_NHOST_REGION || "",
});

function MyApp({ Component, pageProps }) {
  return (
    <NhostNextProvider nhost={nhost} initial={pageProps.nhostSession}>
      <UserProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <Component {...pageProps} />
        </MantineProvider>
        <Toaster />
      </UserProvider>
    </NhostNextProvider>
  );
}

export default MyApp;
