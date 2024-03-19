"use client";

import { Avatar, Card, Stack } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";

export default function Home() {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Stack direction={"row"} spacing={2}>
        <MonthCard month={months[0]}></MonthCard>
        <MonthCard month={months[1]}></MonthCard>
        <MonthCard month={months[2]}></MonthCard>
        <MonthCard month={months[3]}></MonthCard>
        <MonthCard month={months[4]}></MonthCard>
        <MonthCard month={months[5]}></MonthCard>
        <MonthCard month={months[6]}></MonthCard>
        <MonthCard month={months[7]}></MonthCard>
        <MonthCard month={months[8]}></MonthCard>
        <MonthCard month={months[9]}></MonthCard>
        <MonthCard month={months[10]}></MonthCard>
        <MonthCard month={months[11]}></MonthCard>
      </Stack>
    </main>
  );
}

function ButtonUsage() {
  return <Button variant="outlined">Hello World</Button>;
}

function FamilyMember(props: { name: string, birth_month: number, birth_day:number}) {
  return (
  <Stack direction={"row"}>
  <Avatar className="w-400">{props.name.charAt(0).toUpperCase()}</Avatar>
  Birthday:{props.birth_month}-{props.birth_day}
  </Stack>
  );
}

function MonthCard({ month }: { month: string }) {
  return (
    <Stack direction="column" spacing="10">
      <Button variant="contained" disabled>{month}</Button>
      <FamilyMember name="JK" birth_month={1} birth_day={2} ></FamilyMember>
      <hr className="border-white border-l-2" />
      <FamilyMember name={"AP"} birth_month={2} birth_day={3}></FamilyMember>
      <hr className="border-white border-l-2" />
      <FamilyMember name={"CT"} birth_month={3} birth_day={4}></FamilyMember>
    </Stack>
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

  constructor(
    year: number,
    month: number,
    day: number,
    isLunar: boolean = false
  ) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.isLunar = isLunar;
  }

  // 检查用户输入的时间是否有效
  public static CheckValid(
    year: number,
    month: number,
    day: number,
    isLunar: boolean
  ) {}
}
