"use client"

import { getAreaData } from '@/app/Dashboard/action';
import { useMutation } from '@tanstack/react-query';
import { AreaChart } from '@tremor/react';
import { useEffect } from 'react';
import { Skeleton } from '../ui/skeleton';
import Error from '../Error';


const dataFormatter = (number: number) =>
  `${Intl.NumberFormat('us').format(number).toString()}`;

export function AreaChartHero() {

useEffect(() => {
      mutate()
},[])

const { mutate, data, isPending, isError} = useMutation({
    mutationKey: ['get-area'],
    mutationFn: getAreaData,
})

  return (
    !isPending ? (
      data ? 
      <>
    <AreaChart
      className="h-80 "
      data={data.data}
      index="date"
      categories={[Object.keys(data.data[0])[1], Object.keys(data.data[0])[2]]}
      colors={['teal-500', 'teal-900']}
      valueFormatter={dataFormatter}
      yAxisWidth={60}
      onValueChange={(v) => console.log(v)}
    />
    </> : <div className="w-full flex justify-center items-center  h-[116px]">
              <Error colum={false} />
          </div> 
          ) : (
          <Skeleton className='w-full h-[320px]'/>
    )
  );
}