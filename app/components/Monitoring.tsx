import React from "react";
import Card from "./Card";
import { Server } from "lucide-react";
import Table from "./Table";

const Monitoring = async () => {
  const res = await fetch(
    "https://vinfastauto.id/api/vinfast/get-charging-stations",
  );
  const data = await res.json();
  console.log(data);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card title="Total Nodes" value="1,248" icon={Server} />
        <Card title="Active Nodes" value="1,120" icon={Server} />
        <Card title="Inactive Nodes" value="128" icon={Server} />
        <Card title="Error Nodes" value="5" icon={Server} />
      </div>
      <Table data={data} />
    </div>
  );
};

export default Monitoring;
