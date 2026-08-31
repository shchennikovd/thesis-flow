import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginDto } from "../model/dto";
import { useLogin } from "./use-login";
import { Input } from "@/shared/ui/input/Input";
import { Button } from "@/shared/ui/button/Button";

export function LoginForm() {
  const { mutate: login, isPending, error: apiError } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginDto>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginDto) => {
    login(data);
  };

  return (
    <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Вход в систему</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
        
        <Input
          label="Email"
          type="email"
          placeholder="student@university.edu"
          {...register("email")}
          error={errors.email?.message}
        />

        <Input
          label="Пароль"
          type="password"
          placeholder="••••••••"
          {...register("password")}
          error={errors.password?.message}
        />

        {apiError && (
          <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg">
            {apiError.message}
          </div>
        )}

        <Button type="submit" isLoading={isPending} className="mt-2">
          Войти
        </Button>

      </form>
    </div>
  );
}