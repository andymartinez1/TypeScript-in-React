import { useState } from "react";
import goalsImg from "../public/goals.jpg";
import "./App.css";
import GoalList from "./components/GoalList";
import Header from "./components/Header";

export interface Goal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<Goal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: Goal = {
        id: Math.random(),
        title: "Learning React + TypeScript",
        description: "Learn it in depth",
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
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <GoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
}
