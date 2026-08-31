import { Button } from "@/shared/ui/button/Button";
import { useStudentTheses } from "@/features/thesis/ui/use-theses";
// 1. Импортируем хук навигации
import { useNavigate } from "react-router-dom"; 

export function DashboardPage() {
  const myStudentId = "student-123";
  
  const navigate = useNavigate();

  const { data: theses, isLoading, isError } = useStudentTheses(myStudentId);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Мои дипломные работы 
        </h1>

        {isLoading && <p className="text-gray-500">Загружаем список...</p>}
        {isError && <p className="text-red-500">Не удалось загрузить данные.</p>}

        {theses && (
          <div className="flex flex-col gap-4">
            {theses.map((thesis) => (
              <div key={thesis.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold text-blue-600">{thesis.title}</h2>
                {thesis.description && (
                  <p className="text-gray-600 mt-1">{thesis.description}</p>
                )}
                
                <div className="mt-4 flex gap-2">
                  <Button 
                    variant="secondary" 
                    onClick={() => navigate(`/thesis/${thesis.id}`)}
                  >
                    Подробнее
                  </Button>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}