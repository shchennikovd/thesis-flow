import { useQuery } from "@tanstack/react-query";
import { thesisService } from "../api/thesis.service";
import { ID } from "@/shared/types/common";

export function useThesis(thesisId: ID) {
  return useQuery({
    queryKey: ["thesis", thesisId],
    queryFn: async () => {
      return thesisService.getById(thesisId);
    }
  })
}