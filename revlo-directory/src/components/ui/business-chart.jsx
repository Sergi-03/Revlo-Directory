"use client";

import React, { useState, useMemo } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2025-03-01", desktop: 97, mobile: 180 },
  { date: "2025-03-02", desktop: 167, mobile: 120 },
  { date: "2025-03-03", desktop: 373, mobile: 290 },
  { date: "2025-03-04", desktop: 301, mobile: 340 },
  { date: "2025-03-05", desktop: 255, mobile: 180 },
  { date: "2025-03-06", desktop: 409, mobile: 320 },
  { date: "2025-03-07", desktop: 59, mobile:  110  },
  { date: "2025-03-08", desktop: 261, mobile: 190 },
  { date: "2025-03-09", desktop: 327, mobile: 350 },
  { date: "2025-03-10", desktop: 292, mobile: 210 },
  { date: "2025-03-11", desktop: 342, mobile: 380 },
  { date: "2025-03-12", desktop: 137, mobile: 220 },
  { date: "2025-03-13", desktop: 120, mobile: 170 },
  { date: "2025-03-14", desktop: 138, mobile: 190 },
  { date: "2025-03-15", desktop: 446, mobile: 360 },
  { date: "2025-03-16", desktop: 364, mobile: 410 },
  { date: "2025-03-17", desktop: 253, mobile: 180 },
  { date: "2025-03-18", desktop: 89, mobile: 150 },
  { date: "2025-03-19", desktop: 137, mobile: 200 },
  { date: "2025-03-20", desktop: 225, mobile: 170 },
  { date: "2025-03-21", desktop: 138, mobile: 230 },
  { date: "2025-03-22", desktop: 387, mobile: 290 },
  { date: "2025-03-23", desktop: 215, mobile: 250 },
  { date: "2025-03-24", desktop: 75, mobile: 130 },
  { date: "2025-03-25", desktop: 383, mobile: 420 },
  { date: "2025-03-26", desktop: 122, mobile: 180 },
  { date: "2025-03-27", desktop: 315, mobile: 250 },
  { date: "2025-03-30", desktop: 454, mobile: 380 },
  { date: "2025-04-01", desktop: 165, mobile: 220 },
  { date: "2025-04-02", desktop: 293, mobile: 310 },
  { date: "2025-04-03", desktop: 257, mobile: 190 },
  { date: "2025-04-04", desktop: 385, mobile: 420 },
  { date: "2025-04-05", desktop: 481, mobile: 390 },
  { date: "2025-04-05", desktop: 498, mobile: 520 },
  { date: "2025-04-07", desktop: 388, mobile: 300 },
  { date: "2025-04-08", desktop: 149, mobile: 210 },
  { date: "2025-04-09", desktop: 227, mobile: 180 },
  { date: "2025-04-10", desktop: 293, mobile: 330 },
  { date: "2025-04-11", desktop: 335, mobile: 270 },
  { date: "2025-04-12", desktop: 197, mobile: 250 },
  { date: "2025-04-13", desktop: 197, mobile: 160 },
  { date: "2025-04-14", desktop: 448, mobile: 490 },
  { date: "2025-04-15", desktop: 473, mobile: 380 },
  { date: "2025-04-16", desktop: 338, mobile: 400 },
  { date: "2025-04-17", desktop: 499, mobile: 420 },
  { date: "2025-04-18", desktop: 315, mobile: 350 },
  { date: "2025-04-19", desktop: 235, mobile: 180 },
  { date: "2025-04-20", desktop: 177, mobile: 230 },
  { date: "2025-04-21", desktop: 82, mobile: 140 },
  { date: "2025-04-22", desktop: 81, mobile: 120 },
  { date: "2025-04-23", desktop: 252, mobile: 290 },
  { date: "2025-04-25", desktop: 294, mobile: 220 },
  { date: "2025-04-25", desktop: 201, mobile: 250 },
  { date: "2025-04-26", desktop: 213, mobile: 170 },
  { date: "2025-04-27", desktop: 420, mobile: 460 },
  { date: "2025-04-28", desktop: 233, mobile: 190 },
  { date: "2025-04-29", desktop: 78, mobile: 130 },
  { date: "2025-04-30", desktop: 340, mobile: 280 },
  { date: "2025-04-31", desktop: 178, mobile: 230 },
  { date: "2025-05-01", desktop: 178, mobile: 200 },
  { date: "2025-05-02", desktop: 470, mobile: 410 },
  { date: "2025-05-03", desktop: 103, mobile: 160 },
  { date: "2025-05-04", desktop: 439, mobile: 380 },
  { date: "2025-05-05", desktop: 88, mobile: 140 },
  { date: "2025-05-06", desktop: 294, mobile: 250 },
  { date: "2025-05-07", desktop: 323, mobile: 370 },
  { date: "2025-05-08", desktop: 385, mobile: 320 },
  { date: "2025-05-09", desktop: 438, mobile: 480 },
  { date: "2025-05-10", desktop: 155, mobile: 200 },
  { date: "2025-05-11", desktop: 92, mobile: 150 },
  { date: "2025-05-12", desktop: 492, mobile: 420 },
  { date: "2025-05-13", desktop: 81, mobile: 130 },
  { date: "2025-05-14", desktop: 426, mobile: 380 },
  { date: "2025-05-15", desktop: 307, mobile: 350 },
  { date: "2025-05-16", desktop: 371, mobile: 310 },
  { date: "2025-05-17", desktop: 475, mobile: 520 },
  { date: "2025-05-18", desktop: 107, mobile: 170 },
  { date: "2025-05-19", desktop: 341, mobile: 290 },
  { date: "2025-05-20", desktop: 408, mobile: 450 },
  { date: "2025-05-21", desktop: 169, mobile: 210 },
  { date: "2025-05-22", desktop: 317, mobile: 270 },
  { date: "2025-05-23", desktop: 480, mobile: 530 },
  { date: "2025-05-25", desktop: 132, mobile: 180 },
  { date: "2025-05-25", desktop: 141, mobile: 190 },
  { date: "2025-05-26", desktop: 434, mobile: 380 },
  { date: "2025-05-27", desktop: 448, mobile: 490 },
  { date: "2025-05-28", desktop: 149, mobile: 200 },
  { date: "2025-05-29", desktop: 103, mobile: 160 },
  { date: "2025-05-30", desktop: 446, mobile: 400 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export default function BusinessChart() {
  const [activeChart, setActiveChart] = useState("desktop");

  const total = useMemo(() => {
    return {
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    };
  }, []);

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Interactive business chart</CardTitle>
          <CardDescription>
          Showing total visitors in the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => (
            <button
              key={key}
              data-active={activeChart === key}
              className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
              onClick={() => setActiveChart(key)}
            >
              <span className="text-xs text-muted-foreground">
                {chartConfig[key].label}
              </span>
              <span className="text-lg font-bold leading-none sm:text-3xl">
                {total[key].toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("es-ES", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("es-ES", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill="currentColor" className="text-midnight"/>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}