import { QueryProvider } from "./app/providers/query-provider";
import { LoginForm } from "./features/auth/ui/LoginForm";

export default function App() {
  return (
    <QueryProvider>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <LoginForm />
      </div>
    </QueryProvider>
  );
}