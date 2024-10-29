import { ReactNode } from "react";

interface GoalProps {
  title: string;
  children: ReactNode;
}

export default function Header({ title, children }: GoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
}
