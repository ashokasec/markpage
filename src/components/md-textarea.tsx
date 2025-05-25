"use client";

import { ResizablePanel } from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";

const MardownInput = ({
  markdown,
  setMarkdown,
}: {
  markdown: string;
  setMarkdown: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <ResizablePanel className="h-screen  pl-2 py-2 pr-1">
      <Textarea
        value={markdown}
        className="w-full rounded-md h-full text-sm leading-[1.6] font-mono resize-none p-4 no-scrollbar border no-scrollbar"
        onChange={(e) => setMarkdown(e.target.value)}
        spellCheck={false}
      />
    </ResizablePanel>
  );
};

export default MardownInput;
