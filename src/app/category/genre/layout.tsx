import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <h1>genre header</h1>
      <div>{children}</div>
      <h2>genre footer</h2>
    </>
  );
}
