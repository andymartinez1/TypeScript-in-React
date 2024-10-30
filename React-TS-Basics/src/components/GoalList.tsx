import { ReactNode } from "react";
import { type Goal as IGoal } from "../App";
import Goal from "./Goal";
import InfoBox from "./InfoBox";

interface GoalListProps {
  goals: IGoal[];
  onDeleteGoal: (id: number) => void;
}

export default function GoalList({ goals, onDeleteGoal }: GoalListProps) {
  if (goals.length === 0) {
    return <InfoBox mode="hint">There are no goals yet.</InfoBox>;
  }

  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = <InfoBox mode="warning">Too many goals</InfoBox>;
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </>
  );
}
