import { useState, useTransition } from "react";

const apiCall = async (name: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
};

export function UpdateName() {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    startTransition(async () => {
      await apiCall(name);
    });
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
    </div>
  );
}
