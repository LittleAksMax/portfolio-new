import { AppLayout } from "../components/layout/app-layout";
import { DocumentProvider } from "../contexts/document-context";

export default function Home() {
  return (
    <DocumentProvider>
      <AppLayout />
    </DocumentProvider>
  );
}
