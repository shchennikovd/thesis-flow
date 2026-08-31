import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui/button/Button";
import { useThesis } from "@/features/thesis/ui/use-thesis";
import { ID } from "@/shared/types/common";

export function ThesisDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data: thesis, isLoading, isError } = useThesis(id as ID);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Button variant="secondary" onClick={() => navigate("/")} className="mb-6">
          Назад к списку
        </Button>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          
          {/* Скелет загрузки */}
          {isLoading && <p className="text-gray-500 animate-pulse">Загружаем данные ВКР...</p>}
          
          {/* Ошибка */}
          {isError && <p className="text-red-500">Не удалось загрузить дипломную работу.</p>}

          {/* Реальные данные */}
          {thesis && (
            <>
              <h1 className="text-2xl font-bold text-gray-800 mb-2">
                {thesis.title}
              </h1>
              {thesis.description && (
                <p className="text-gray-600 mb-6">{thesis.description}</p>
              )}

              <div className="mt-8 p-8 border-2 border-dashed border-gray-300 rounded-lg text-center text-gray-500">
                Здесь скоро будет крутая Kanban-доска с этапами ВКР
                <br />
                <span className="text-sm text-gray-400">ID процесса: {thesis.workflowId}</span>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
}