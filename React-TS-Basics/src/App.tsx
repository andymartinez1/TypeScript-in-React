import { useState } from "react";
import goalsImg from "../public/goals.jpg";
import "./App.css";
import GoalList from "./components/GoalList";
import Header from "./components/Header";
import NewGoal from "./components/NewGoal";

export interface Goal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals list" }}>
        <h1>Goal List</h1>
      </Header>
      <NewGoal onAddGoal={handleAddGoal} />
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
