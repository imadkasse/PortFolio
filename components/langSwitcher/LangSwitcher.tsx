"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookie from "js-cookie";

export default function LanguageSwitcher() {
  const [locale, setLocale] = useState("en");
  const router = useRouter();

  useEffect(() => {
    const savedLocale = Cookie.get("locale") || "en";
    setLocale(savedLocale);
  }, []);

  const changeLanguage = async (newLocale: string) => {
    const currentLocale = Cookie.get("locale");

    if (!locale || locale !== newLocale) {
      Cookie.set("locale", newLocale, { expires: 365, path: "/" }); // تعيين الكوكيز مع مدة صلاحية وسيرفر شمل كامل الموقع

      setLocale(newLocale);
      router.refresh();
    }
  };

  return (
    <div className="mx-1">
      <select
        value={locale}
        onChange={(e) => changeLanguage(e.target.value)}
        className="px-2 py-2 rounded-lg border border-purple-600 bg-purple-50 text-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
      >
        <option value="en" className="text-black">
          En
        </option>
        <option value="ar" className="text-black">
          Ar
        </option>
      </select>
    </div>
  );
}
