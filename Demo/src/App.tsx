import { useRef } from "react";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Container as={Button}>Click me</Container>
      <Input label="Test" id="test" ref={input} />
    </main>
  );
}

export default App;
