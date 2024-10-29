import { type Goal as IGoal } from "../App";
import Goal from "./Goal";

interface GoalListProps {
  goals: IGoal[];
  onDeleteGoal: (id: number) => void;
}

export default function GoalList({ goals, onDeleteGoal }: GoalListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <Goal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </Goal>
        </li>
      ))}
    </ul>
  );
}
