"use client";

import { ResizablePanel } from "@/components/ui/resizable";
import { marked } from "marked";

const MardownOutput = ({ markdown }: { markdown: string }) => {
  return (
    <ResizablePanel className="h-screen pr-2 py-2 pl-1">
      <article
        className="preview w-full h-full p-6 overflow-y-auto rounded-md prose prose-neutral max-w-none  border no-scrollbar"
        dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}
      />
    </ResizablePanel>
  );
};

export default MardownOutput;
