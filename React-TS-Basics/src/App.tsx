import { useState } from "react";
import goalsImg from "../public/goals.jpg";
import "./App.css";
import Goal from "./components/Goal";
import Header from "./components/Header";

type Goal = {
  title: string;
  description: string;
  id: number;
};

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

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals list" }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <Goal title={goal.title}>
              <p>{goal.description}</p>
            </Goal>
          </li>
        ))}
      </ul>
    </main>
  );
}
