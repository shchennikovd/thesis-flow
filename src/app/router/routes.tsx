import { createBrowserRouter, Navigate } from "react-router-dom";
import { LoginForm } from "@/features/auth/ui/LoginForm";
import { DashboardPage } from "@/pages/dashboard/DashboardPage";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <LoginForm />
      </div>
    ),
  },
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);