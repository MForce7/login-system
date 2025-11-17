"use client";

import React from "react";
import { useState } from "react";

export default function RegistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Nama</label>
        <input
          type="text"
          className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          placeholder="Nama lengkap"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Email</label>
        <input
          type="email"
          className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          placeholder="example@mail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Password</label>
        <input
          type="password"
          className="text-black w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition">
        Sign Up
      </button>
    </form>
  );
}
