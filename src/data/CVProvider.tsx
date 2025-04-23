import { useState, ReactNode, useEffect } from "react";
import { CV } from "@/types/cv";
import axios from "axios";
import { CVContext, CVContextType } from "./CVContext";

// Utility function to load CV from JSON file
const loadCV = async (): Promise<CV> => {
  try {
    const response = await axios.get("./cv.json");
    return response.data;
  } catch (error) {
    console.error("Error loading sample CV:", error);
    throw new Error("Failed to load CV data");
  }
};

export const CVProvider = ({ children }: { children: ReactNode }) => {
  const [cv, setCv] = useState<CV | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Load CV from JSON file on mount
  useEffect(() => {
    const fetchCV = async () => {
      try {
        setLoading(true);
        const data = await loadCV();
        setCv(data);
        setError(null);
      } catch (error) {
        setError("Failed to load CV data. Please try again later.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCV();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading CV data...
      </div>
    );
  }

  if (error || !cv) {
    return (
      <div className="flex justify-center items-center min-h-screen text-red-600">
        Error: {error}
      </div>
    );
  }

  return (
    <CVContext.Provider value={{ cv, loading, error } as CVContextType}>
      {children}
    </CVContext.Provider>
  );
};
