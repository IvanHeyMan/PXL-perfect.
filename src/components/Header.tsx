
import React from "react";
import { createClient } from "@/prismicio";
import Link from "next/link";
import NavBar from "./NavBar";

//import NavBar from "@/components/NavBar";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <header className="top-5 z-50 mx-auto max-w-7xl sticky md:sticky md:top-5 md:-mt-5">

        <NavBar settings={settings} />

    </header>
  );
}