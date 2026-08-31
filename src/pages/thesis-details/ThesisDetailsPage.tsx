import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button/Button";

export function ThesisDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Button variant="secondary" onClick={() => navigate("/")} className="mb-6">
          Назад к списку
        </Button>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Детали дипломной работы
          </h1>
          <p className="text-gray-500 mb-6">
            ID работы из URL: <span className="font-mono text-blue-600">{id}</span>
          </p>

          <div className="p-8 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-400">
            Здесь скоро будет крутая Kanban-доска с этапами ВКР
          </div>
        </div>
      </div>
    </div>
  );
}