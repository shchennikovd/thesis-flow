import { useQuery } from "@tanstack/react-query";
import { thesisService } from "../api/thesis.service";
import { ID } from "@/shared/types/common";

export function useStudentTheses(studentId: ID) {
  return useQuery({
    queryKey: ["theses", "student", studentId],
    
    queryFn: async () => {
      return await thesisService.getStudentThesis(studentId);
    },
  });
}