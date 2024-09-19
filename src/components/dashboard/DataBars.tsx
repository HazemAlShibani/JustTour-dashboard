"use client"

import { Card, ProgressBar } from '@tremor/react';
import { Skeleton } from '../ui/skeleton';

export function ProgressBarUsageExample({data, isPending}: {data?: {
    name: string
    percentage: number,
    target: number,
    currentProfit: number
};
isPending: boolean;
}) {
return (
        !isPending ? (
            data ? 
            <>
                <Card className="mx-auto">
                    <p className="mb-1">{data.name}</p>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content flex items-center justify-between">
                        <span>{data!.currentProfit}{' SYP'} &bull; {data!.percentage}{' %'}</span>
                        <span>{data!.target}{' SYP'}</span>
                    </p>
                    <ProgressBar value={data!.percentage} color="teal" className="mt-3" />
                </Card>
            </> :
            null
        ) : (<Skeleton className="h-[116px] w-full rounded-md" />)

        )
        
}