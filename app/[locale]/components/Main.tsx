"use client";
import { useI18n, useScopedI18n } from "@/app/locales/client";
import React from "react";

export default function Main() {
  const t = useI18n();
  const scopedT = useScopedI18n("hello");

  return (
    <div>
      <p>{t("hello")}</p>

      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>

      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: <strong>John</strong> })}</p>
    </div>
  );
}
