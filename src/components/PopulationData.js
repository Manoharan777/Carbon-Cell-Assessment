import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {PopulationDataUrl} from "../utility/constants"

export default function PopulationData() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(PopulationDataUrl);
      const json = await response.json();
      setChartData(json.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Extract unique nations from the data
  const nations = chartData.map((entry) => entry.Nation);
  const uniqueNations = [...new Set(nations)];

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mt-8 mb-4 text-orange-600">
        POPULATION DATA
      </h1>
      <div className="flex justify-center items-center">
        <div className="m-10  text-black rounded-lg shadow-lg bg-white">
          <LineChart
            width={window.innerWidth > 768 ? 800 : window.innerWidth - 40}
            height={window.innerWidth > 768 ? 500 : 300}
            margin={{
              top: 30,
              right: 30,
              left: 30,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            {uniqueNations.map((nation) => (
              <Line
                key={nation}
                type="monotone"
                data={chartData.filter((entry) => entry.Nation === nation)}
                dataKey="Population"
                name={nation}
                stroke="green"
              />
            ))}
          </LineChart>
        </div>
      </div>
    </>
  );
}
