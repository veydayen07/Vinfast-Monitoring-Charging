import Header from "./components/Header";
import Card from "./components/Card";
import { Server, Battery, Zap } from "lucide-react";
import Monitoring from "./components/Monitoring";

export default function Home() {
  return (
    <div className="text-on-surface antialiased">
      <Header />
      <Monitoring />
    </div>
  );
}
