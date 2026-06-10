"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Home() {
  const [nama, setNama] = useState("");

  async function simpan() {
    const { error } = await supabase
      .from("customers")
      .insert({
        name: nama,
      });

    if (error) {
      alert(error.message);
      console.log(error);
      return;
    }

    alert("Berhasil disimpan!");
    setNama("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Customer App</h1>

      <br />

      <input
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        placeholder="Nama Customer"
      />

      <button
        onClick={simpan}
        style={{ marginLeft: "10px" }}
      >
        Simpan
      </button>
    </div>
  );
}