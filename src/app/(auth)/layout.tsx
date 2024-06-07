import { ReactNode } from "react";

export const metadata = {
  title: "Auth page",
}

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>auth header</h1>
      <div>{children}</div>
      <h2>auth footer</h2>
    </>
  );
}
