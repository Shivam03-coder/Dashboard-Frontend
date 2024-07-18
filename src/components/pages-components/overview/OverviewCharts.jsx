import React from "react";
import {
  LineChart,
  ResponsiveContainer,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const OverviewCharts = ({ data }) => {
  console.log("🚀 ~ OverviewCharts ~ data:", data);

  // Example: plotting dailyData
  const dailyData = data?.monthlyData?.totalSales || [];
  const months = data?.monthlyData?.month || [];

  return (
    <ResponsiveContainer width="100%" aspect={2}>
      <LineChart data={dailyData}>
        <XAxis dataKey={`${months}`} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="value" stroke="#ffffff" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewCharts;
