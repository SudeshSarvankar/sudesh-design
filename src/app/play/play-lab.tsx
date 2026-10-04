"use client";

import { InteractiveObject } from "@/components/InteractiveObject";
import {
  Camera,
  Chai,
  Headphones,
  Journal,
  Plant,
  Vinyl,
} from "@/components/objects/DeskIllustrations";
import { useState } from "react";

export function PlayLab() {
  const [message, setMessage] = useState("Pick an object. Don’t overthink it.");

  return (
    <div className="mt-14 desk-grid min-h-[420px] rounded-sm border border-ink/10 p-8">
      <p className="font-hand text-2xl text-ink/80">{message}</p>
      <div className="mt-10 flex flex-wrap items-end gap-10">
        <InteractiveObject
          label="Nudge plant"
          hint="HI"
          onActivate={() => setMessage("The plant says you’re allowed to wander.")}
        >
          <Plant className="h-28 w-28" />
        </InteractiveObject>
        <InteractiveObject
          label="Spin vinyl"
          hint="PLAY"
          onActivate={() => setMessage("A side-B kind of afternoon.")}
        >
          <Vinyl className="h-28 w-28" />
        </InteractiveObject>
        <InteractiveObject
          label="Wear headphones"
          hint="LISTEN"
          onActivate={() => setMessage("Silence, with better framing.")}
        >
          <Headphones className="h-24 w-32" />
        </InteractiveObject>
        <InteractiveObject
          label="Sip chai"
          hint="SIP"
          onActivate={() => setMessage("Masala. Too hot. Perfect.")}
        >
          <Chai className="h-28 w-28" />
        </InteractiveObject>
        <InteractiveObject
          label="Take a photo"
          hint="SNAP"
          onActivate={() => setMessage("Collected. Not catalogued.")}
        >
          <Camera className="h-24 w-28" />
        </InteractiveObject>
        <InteractiveObject
          label="Open journal"
          hint="READ"
          onActivate={() => setMessage("Margin note: make the empty state kinder.")}
        >
          <Journal className="h-28 w-24" />
        </InteractiveObject>
      </div>
    </div>
  );
}
