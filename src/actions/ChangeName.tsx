import { useActionState } from "react";

const apiCall = async (name: string) => {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve(name);
    }, 1000);
  });
};

export const ChangeName = () => {
  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData: FormData) => {
      const error = await apiCall(formData.get("name") as string);
      if (error) {
        // You can return any result of the action.
        // Here, we return only the error.
        return error;
      }

      // handle success
      return null;
    },
    null
  );

  return (
    <form action={submitAction}>
      <input name="name" />
      <button type="submit" disabled={isPending}>
        Change
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};
