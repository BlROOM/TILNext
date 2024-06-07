import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>category header</h1>
      <div>{children}</div>
      <h2>category footer</h2>
    </>
  );
}
