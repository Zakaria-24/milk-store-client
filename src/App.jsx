import { useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import MilkCard from "./components/MilkCard";

function App() {
  const loadedMilk = useLoaderData();
  const [milks, setMilks] = useState(loadedMilk);
  return (
    <>
      <h1 className="text-center font-bold text-5xl text-accent">
        MILK STORE: {milks.length}
      </h1>
      <div className="container mx-auto grid md:grid-cols-2 gap-4">
        {milks.map((milk) => (
          <MilkCard
            key={milks._id}
            milk={milk}
            milks={milks}
            setMilks={setMilks}
          ></MilkCard>
        ))}
      </div>
    </>
  );
}

export default App;
