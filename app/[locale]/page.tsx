import { setStaticParamsLocale } from "next-international/server";
import { getI18n, getScopedI18n } from "../locales/server";
import { Metadata, ResolvingMetadata } from "next";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  const t = await getI18n();

  return {
    title: t("seo.title"),
    description: t("seo.description"),
    keywords: ["i18n", "next.js", "internationalisation", "SEO", "App Router"],
    alternates: {
      canonical: `https://your-domain.com/${locale}`,
      languages: {
        en: "https://your-domain.com/en",
        fr: "https://your-domain.com/fr",
      },
    },
    openGraph: {
      title: t("seo.title"),
      description: t("seo.description"),
      url: `https://your-domain.com/${locale}`,
      siteName: "My Website",
      locale,
      type: "website",
    },
  };
}

// If you are using Next.js < 15, you don't need to await `params`:
// export default function Page({ params: { locale } }: { params: { locale: string } }) {
export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setStaticParamsLocale(locale);
  console.log(`locale: ${locale}`);
  const t = await getI18n();
  const scopedT = await getScopedI18n("hello");
  return (
    <div>
      <p className="text-3xl text-blue-700 text-center">{t("hello")}</p>

      {/* Both are equivalent: */}
      <p>{t("hello.world")}</p>
      <p>{scopedT("world")}</p>

      <p>{t("welcome", { name: "John" })}</p>
      <p>{t("welcome", { name: <strong>John</strong> })}</p>
    </div>
  );
}
