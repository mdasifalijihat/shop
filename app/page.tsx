import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <Container className="p-10  ">
      <h1 className="text-2xl font-semibold">Welcome to the Home Page</h1>
      <p>This is the main landing page of the application.</p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi at
        debitis quibusdam eos ipsa! Deserunt veritatis reiciendis facere, ullam
        eaque velit, iste aliquam ad assumenda in architecto ut atque commodi
        officiis id sapiente quam aut reprehenderit impedit vitae fuga sequi
        veniam? Reiciendis accusamus quae eligendi autem! Aut iste modi maiores?
      </p>
      <Button size={"lg"}>Check out</Button>
    </Container>
  );
};

export default Home;
