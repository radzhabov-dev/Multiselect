import { useEffect, useState } from "react";
import { fetchAvailableTimezones } from "@/shared/api";

export function useAvailableTimezones() {
  const [timezones, setTimezones] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchAvailableTimezones()
      .then(setTimezones)
      .catch((err) => setError(err.message || "Something went wrong"))
      .finally(() => setLoading(false));
  }, []);

  return { timezones, loading, error };
}
