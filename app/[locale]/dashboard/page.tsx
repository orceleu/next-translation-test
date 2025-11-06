"use client";
import {
  useChangeLocale,
  useCurrentLocale,
  useI18n,
  useScopedI18n,
} from "@/app/locales/client";
import React from "react";

export default function Dashboard() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const t = useI18n();
  const scopedT = useScopedI18n("hello");
  return (
    <div>
      <p className="text-3xl text-blue-700 text-center">{t("hello")}</p>
      <p>Current locale: {locale}</p>
      <button onClick={() => changeLocale("en")}>English</button>
      <button onClick={() => changeLocale("fr")}>French</button>
      {/* Both are equivalent: */}
      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>

      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: <strong>John</strong> })}</p>
    </div>
  );
}
