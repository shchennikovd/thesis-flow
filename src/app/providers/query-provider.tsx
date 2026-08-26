import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

interface QueryProviderProps {
  children: ReactNode;
}

export function QueryProvider({ children }: QueryProviderProps) {
  // Создаем QueryClient внутри useState, чтобы он не пересоздавался 
  // при каждом рендере компонента
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // Не делать запрос каждый раз, когда возвращаешься во вкладку
            retry: 1,                    // Если запрос упал, попробовать еще 1 раз
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}