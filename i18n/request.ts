import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export default getRequestConfig(async () => {
  let locale = "ar";

  const cookieStore = cookies();

  const savedLocale = cookieStore.get("locale");

  if (savedLocale) {
    locale = savedLocale.value;
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
