import { Button } from "@/shared/ui/button/Button";

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Мои дипломные работы 🎓
        </h1>
        <p className="text-gray-600 mb-6">
          Добро пожаловать! Здесь скоро появится список ваших ВКР и этапов.
        </p>
        {/* Пока просто тестовая кнопка для логаута (без логики) */}
        <Button variant="secondary" onClick={() => alert("Тут будет логаут")}>
          Выйти
        </Button>
      </div>
    </div>
  );
}