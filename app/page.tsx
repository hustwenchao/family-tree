"use client"

import { Avatar, Card } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex w-screen gap-3">
        <MonthCard month={"January"} ></MonthCard>
        <MonthCard month={"February"} ></MonthCard>
        <MonthCard month={"March"} ></MonthCard>
        <MonthCard month={"April"} ></MonthCard>
        <MonthCard month={"May"} ></MonthCard>
        <MonthCard month={"June"} ></MonthCard>
        <MonthCard month={"July"} ></MonthCard>
        <MonthCard month={"August"} ></MonthCard>
        <MonthCard month={"September"} ></MonthCard>
        <MonthCard month={"October"} ></MonthCard>
        <MonthCard month={"November"} ></MonthCard>
        <MonthCard month={"December"} ></MonthCard>
      </div>
    </main>
  );
}

function ButtonUsage() {
  return (
    <Button variant="outlined">Hello World</Button>
  )
}

function FamilyMember({ name }: { name: string }) {
  return (
    <Avatar className="w-400">{name.charAt(0).toUpperCase()}</Avatar>
  )
}

function MonthCard({ month }: { month: string }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-50 rounded-lg bg-blue-200 p-4 text-center">
        {month}
      </div>
      <div className="flex flex-col gap-4">
        <FamilyMember name={"John Doe"}></FamilyMember>
        <hr className="border-white border-l-2"/>
        <FamilyMember name={"John Doe"}></FamilyMember>
        <hr className="border-white border-l-2" />
        <FamilyMember name={"John Doe"}></FamilyMember>
      </div>
    </div>
  );
}

function CountDown() {
  const [time, setTime] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{time}</div>;
}

// 定义一个Birthday的类，包含出生的年月日
class Birthday {
  private year: number = 0;
  private month: number = 0;
  private day: number = 0;
  private isLunar: boolean = false;

  constructor(year: number, month: number, day: number, isLunar: boolean = false) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.isLunar = isLunar;
  }

  // 检查用户输入的时间是否有效
  public static CheckValid(year: number, month: number, day: number, isLunar: boolean) {

  }
}