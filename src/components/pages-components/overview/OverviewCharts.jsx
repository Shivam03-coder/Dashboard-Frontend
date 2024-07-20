import React, { useEffect } from "react";
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

const OverviewCharts = ({ ChartData }) => {
  useEffect(() => {
    const originalConsoleError = console.error;

    console.error = (...args) => {
      if (typeof args[0] === "string" && /defaultProps/.test(args[0])) {
        return;
      }

      originalConsoleError(...args);
    };

    return () => {
      console.error = originalConsoleError;
    };
  }, []);

  return (
    <ResponsiveContainer width="100%" height={700}>
      <LineChart
        data={ChartData}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip
          contentStyle={{
            backgroundColor: "black",
            borderRadius: "8px",
            boxShadow: "revert",
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="totalSales"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="totalUnits" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OverviewCharts;
