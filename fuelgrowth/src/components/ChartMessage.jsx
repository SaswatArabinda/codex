import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  PieChart,
  Pie,
  Sector,
} from "recharts";
import { colors } from "../constants/colors";

const extractDataKeys = (data) => {
  const set = new Set();

  data.forEach((element) => {
    Object.keys(element).forEach((key) => {
      set.add(key);
    });
  });

  return [...set];
};

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export const LineChartComponent = ({ data }) => {
  const keys = extractDataKeys(data);
  console.log(data, keys);
  return (
    <div className="w-full h-96" style={{ marginLeft: 0 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {keys.includes("name") && <XAxis dataKey="name" />}
          <YAxis />
          <Tooltip />
          <Legend />
          {keys
            .filter((key) => key !== "name")
            .map((key, index) => {
              console.log(key, index);
              return (
                <Line
                  type="monotone"
                  key={key}
                  dataKey={key}
                  stroke={colors[index % colors.length]}
                />
              );
            })}
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export const BarChartComponent = ({ data }) => {
  const keys = extractDataKeys(data);
  console.log(data, keys);
  return (
    <div className="w-full h-96" style={{ marginLeft: 0 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {keys.includes("name") && <XAxis dataKey="name" />}
          <YAxis />
          <Tooltip />
          <Legend />
          {keys
            .filter((key) => key !== "name")
            .map((key, index) => {
              console.log(key, index);
              return (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={colors[index % colors.length]}
                />
              );
            })}
          {/* <Bar dataKey="pv" fill="#8884d8" /> */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export const PieChartComponent = ({ data }) => {
  return (
    <div className="w-full h-56" style={{ marginLeft: 0 }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};
