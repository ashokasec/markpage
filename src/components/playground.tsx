"use client";

import { app } from "@/lib/config/app";
import dynamic from "next/dynamic";
import { useState } from "react";
import { ResizableHandle, ResizablePanelGroup } from "./ui/resizable";

const MardownInput = dynamic(() => import("./md-textarea"), { ssr: false });
const MardownOutput = dynamic(() => import("./md-output"), { ssr: false });

export default function PLayground() {
  const [markdown, setMarkdown] = useState(`# Welcome to **${app.name}**

Your clean, no-login **markdown editor** with:

- 📝 Live preview  
- 💾 Auto-save (localStorage)  
- ⚡️ Offline-ready  

---

## Features

- Write. Preview. Done.  
- Minimal UI, max focus  
- Built for devs, writers & markdown nerds

---

## About the Author

Made with 💻 by [ashokasec](https://x.com/ashokasec)  
Indie hacker, full-stack dev, markdown enjoyer.

Got ideas or feature requests? DM me on [X](https://x.com/ashokasec).

---

_You can clear this and start fresh anytime._ 🚀
`);

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="grid grid-cols-2 w-full max-h-screen !border-0"
    >
      <MardownInput markdown={markdown} setMarkdown={setMarkdown} />
      <ResizableHandle className="bg-gray-50" />
      <MardownOutput markdown={markdown} />
    </ResizablePanelGroup>
  );
}
