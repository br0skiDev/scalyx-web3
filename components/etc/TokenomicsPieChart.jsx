"use client";
import { Pie, PieChart } from "recharts";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

const chartData = [
  { browser: "presale", tokenomics: 50, fill: "var(--color-presale)" },
  { browser: "liquidity", tokenomics: 25, fill: "var(--color-liquidity)" },
  { browser: "rewards", tokenomics: 15, fill: "var(--color-rewards)" },
  { browser: "team", tokenomics: 10, fill: "var(--color-team)" },
];

const chartConfig = {
  tokenomics: {
    label: "Tokenomics",
  },
  presale: {
    label: "Presale 50%",
    color: "hsl(var(--chart-1))",
  },
  liquidity: {
    label: "Liquidity 25%",
    color: "hsl(var(--chart-3))",
  },
  rewards: {
    label: "Rewards 15%",
    color: "hsl(var(--chart-4))",
  },
  team: {
    label: "Team 10%",
    color: "hsl(var(--chart-2))",
  },
};

export const TokenomicsPieChart = () => {
  return (
    <Card className="flex flex-col h-fit w-full md:w-[450px] py-6 z-20 rpnded-xl">
      <CardHeader className="items-center pb-0">
        <CardTitle className="font-pixel text-3xl text-foreground">
          Tokenomics{" "}
          <span className="font-sans font-black text-primary text-[18px]">
            SX1
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="tokenomics" />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
