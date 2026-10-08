"use client";

import { useState } from "react";
import { prices, type PriceSet } from "@/lib/report";

export function PriceTable() {
  const [set, setSet] = useState<PriceSet>("encore");
  const current = prices[set];

  return (
    <div>
      <div className="toolbar">
        <div className="toggle" role="group" aria-label="Price set">
          <button
            type="button"
            aria-pressed={set === "encore"}
            onClick={() => setSet("encore")}
          >
            October encore
          </button>
          <button
            type="button"
            aria-pressed={set === "prime"}
            onClick={() => setSet("prime")}
          >
            June Prime Day
          </button>
        </div>
        <p className="caption">{current.caption}</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Now</th>
            <th>Was</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {current.rows.map((row) => (
            <tr key={row.product}>
              <td>{row.product}</td>
              <td className="now">{row.now}</td>
              <td className="was">{row.was}</td>
              <td>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
