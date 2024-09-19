
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
 
const f = createUploadthing();
 
const auth = (req: Request) => ({ id: "fakeId" });

export const ourFileRouter = {
  imageUploader: f({ 
    image: { 
        maxFileSize: "32MB",
        maxFileCount: 25
    }
})  
  .middleware(async ({ req }) => {
      return { req };
    })
    .onUploadComplete(async (data) => {
        return {data : data.file}
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter;