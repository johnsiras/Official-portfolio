import type { MetaFunction } from "@remix-run/node";
import { MantineProvider, createEmotionCache, Container } from "@mantine/core";
import { Document } from "./components/Document";
import { Outlet } from "@remix-run/react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

createEmotionCache({ key: "mantine" });

export default function App() {
  return (
    <MantineProvider
      theme={{ colorScheme: "dark" }}
      withGlobalStyles
      withNormalizeCSS
    >
      <Document>
        <Container>
          <Outlet />
        </Container>
      </Document>
    </MantineProvider>
  );
}
