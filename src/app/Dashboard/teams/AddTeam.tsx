"use client"

import { Button } from "@/components/ui/button"
import {
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form"
  import { Input } from "@/components/ui/input"
  import { DiamondPlus, Loader2 } from "lucide-react"
  import { useForm } from "react-hook-form"
  import { z } from "zod"
  import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { addTeam } from "../action"
import { useState } from "react"



export type teamInformation = {
  teamName: string
  email: string
  phoneNumber: string
  password: string
}


const AddTeam = () => {
  const {toast} = useToast();
  const router = useRouter();

  const { mutate, isPending} = useMutation({
      mutationKey: ['add-team'],
      mutationFn: async (values : teamInformation) => addTeam(values),
      onSuccess: () => {
        toast({
          title: 'Your Team is added successfully',
          description: 'They can sign in to the Application with welcoming',
          variant: 'default',
          style: {
            "background": "#14B8A6",
            "color" : "white",
            "border" : "none"
          }
        })
        router.push("/Dashboard")
      },
      onError: () => {
          toast({
              title: 'Something went wrong',
              description: 'There was an error on our end. Please try again.',
              variant: 'destructive',
          })
      }
  })
  

  const formSchema = z.object({
        teamName: z.string().min(2, {
          message: "The name of team must be at least 2 characters.",
        }),
        email: z.string()
        .includes("@", {
          message: "The email of team must have @ character.",
        })
        .max(30, {
          message: "The email of team must be less than 30 characters.",
        }),
        password: z.string()
        .min(8, {
          message: "The password of team must be at least 8 characters.",
        }),

        phoneNumber: z.string()
        .max(10, {
          message: "The number of team must be 10 characters.",
        })
        .min(10, {
          message: "The number of team must be 10 characters.",
        }),
      })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          teamName: "",
          email: "",
          phoneNumber: "",
          password: ""
        },
      })
     
      function onSubmit(values: z.infer<typeof formSchema>) {
        mutate(values);
      }
    


    return <DialogContent className="rounded-md border-2 border-teal-500">
    <DialogHeader>
        <DialogTitle className="m-auto mb-3 items-center flex flex-col gap-3">
            <DiamondPlus className="w-7 h-7 text-teal-500"/>
            <p>Add Team</p>
        </DialogTitle>
        <DialogDescription>
            <span className="text-gray-600">
                Let us add some magic to our system
            </span>
        </DialogDescription>
        
    </DialogHeader>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="teamName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter the name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter the email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Enter the password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="phoneNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter the phone number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            <DialogFooter>
        <Button
            className='p-1 rounded-md bg-teal-500 text-white hover:bg-teal-600 shadow-none'
        >
            {
            isPending ?
             <Loader2 className="animate-spin w-7 h-7 text-white"/>
             : "Add Team"
             }
        </Button>
    </DialogFooter>
      </form>
    </Form>


    </DialogContent>
}

export default AddTeam 