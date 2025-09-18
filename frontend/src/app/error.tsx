// app/error.tsx
"use client";

import Button from "@/components/Button/Button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-4 bg-red-100 text-red-900">
      <h2>Something went wrong (server error)</h2>
      <p>{error.message}</p>
      <pre>{error.stack}</pre>
      <Button>Try again</Button>
    </div>
  );
}
