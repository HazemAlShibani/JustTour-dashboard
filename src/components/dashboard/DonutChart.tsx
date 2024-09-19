"use client"

import { DonutChart } from '@tremor/react';
import { Skeleton } from '../ui/skeleton';


export function DonutChartUsageExample({sales, isPending}: {sales? :{
    name: string,
    data: {
      name: string;
      sales: number;
    }[],
    colors: string[]
  };
  isPending: boolean
}) {
  return (
    !isPending ? (
      sales ? 
      <>
      <div className="flex flex-col items-center justify-center text-center gap-3">
        <DonutChart
          data={sales.data}
          category="sales"
          index="name"
          variant="pie"
          showAnimation={true}
          animationDuration={1500}
          colors={sales.colors}
          className="w-40"
        />
        <p>{sales.name}</p>
      </div>
    </> : null ) 
    : 
    <Skeleton className='w-full h-[196px]'/>
  );
}