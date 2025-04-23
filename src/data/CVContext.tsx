import { createContext } from "react";
import { CV } from "@/types/cv";

export interface CVContextType {
  cv: CV;
  loading: boolean;
  error: string | null;
}

export const CVContext = createContext<CVContextType | null>(null);
