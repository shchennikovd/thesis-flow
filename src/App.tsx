import { QueryProvider } from "./app/providers/query-provider";
import { RouterProvider } from "react-router-dom";
import { router } from "./app/router/routes";

export default function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}