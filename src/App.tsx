import { MultiSelect } from "@/shared/ui";
import { useState } from "react";
import { useAvailableTimezones } from "@/shared/hooks";

function App() {
  const { timezones, loading, error } = useAvailableTimezones();
  const [selectedTimezones, setSelectedTimezones] = useState<string[]>([]);

  return (
    <div className="p-12">
      <div className="max-w-[350px]">
        <MultiSelect
          options={timezones}
          selectedOptions={selectedTimezones}
          onSelectionChange={setSelectedTimezones}
          placeholder="Select timezones"
        />
      </div>

      <div className="mt-4">
        <p>You selected:</p>
        {selectedTimezones.length > 0 ? selectedTimezones.join(", ") : "None"}
      </div>

      {loading && <p className="mt-2 text-gray-500">Loading timezones...</p>}
      {error && <p className="mt-2 text-red-500">Error: {error}</p>}
    </div>
  );
}

export default App;
