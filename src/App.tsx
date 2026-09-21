import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Index } from "./routes/index";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Index />
    </QueryClientProvider>
  );
}
