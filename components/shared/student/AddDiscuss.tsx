"use client";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createDiscuss } from "@/lib/database/actions/discussion.action";
import { UploadOnCloudinary } from "@/lib/utils";
import { useRouter } from 'next/navigation'


const AddDiscuss = () => {
  const router = useRouter()

  const [title, setTitle] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [image, setImage] = useState<any>("");
  const [drawerOpen, setDrawerOpen] = useState(false); // State to manage drawer visibility

  let userToken = "";

  if (typeof window !== "undefined") {
    const token = localStorage.getItem("x-auth-token");
    if (token) {
      userToken = token;
    }
  }


  const handleDiscuss = async () => {
    try {
      const imageUrl = await UploadOnCloudinary(image);
      const res = await createDiscuss({
        title: title,
        message: message,
        userToken: userToken,
        image: imageUrl,
      });
      console.log("Discussion posted successfully!", res);
      setDrawerOpen(false);
      router.refresh()

    } catch (error) {
      console.log("Error while posting discussion:", error);
    }
  };

  return (
    <div>
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <DrawerTrigger className="text-white" onClick={() => setDrawerOpen(true)}>
          Post Discussion
        </DrawerTrigger>
        <DrawerContent className="md:px-28 px-2">
          <DrawerHeader>
            <DrawerTitle>Discussion</DrawerTitle>
            <DrawerDescription>
              Post Your Question/Queries/Topics you want to discuss
              <div className="mt-4">
                <Input
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  placeholder="Discussion Topic Title"
                />
                <Textarea
                  className="mt-4"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder="Elaborate your topics to give clarity"
                />
                <Input
                  onChange={(e) => {
                    setImage(e.target.files);
                  }}
                  className="mt-4"
                  type="file"
                />
              </div>
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <Button
              onClick={handleDiscuss}
              className="bg-zinc-900 hover:bg-indigo-600"
            >
              Post your discussion
            </Button>
            <DrawerClose>
              <Button className="w-full" variant="outline" onClick={() => setDrawerOpen(false)}>
                Cancel
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default AddDiscuss;
