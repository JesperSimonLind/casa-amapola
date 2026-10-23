import * as React from "react";
import { loadPublishedContent, displayMedia, PublishedContent } from "../cms/client";
import { localizeContent } from "../cms/content";
import { useLanguage } from "./LanguageContext";

const ContentContext = React.createContext<PublishedContent>({ pages: {} });

export function ContentProvider({ children }: { children: React.ReactNode }) {
  const [content, setContent] = React.useState<PublishedContent>({ pages: {} });

  React.useEffect(() => {
    const controller = new AbortController();
    let timedOut = false;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 10000);
    loadPublishedContent(controller.signal)
      .then((result) => {
        if (!controller.signal.aborted) setContent(result);
      })
      .catch((error: unknown) => {
        if (!controller.signal.aborted || timedOut) {
          console.error("Unable to load Sanity content; using bundled website content.", error);
        }
      })
      .finally(() => window.clearTimeout(timeout));
    return () => {
      controller.abort();
      window.clearTimeout(timeout);
    };
  }, []);

  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const { language } = useLanguage();
  const { pages, media } = React.useContext(ContentContext);
  return React.useMemo(
    () => {
      const t = localizeContent(language, pages[language], media);
      return { t, media: media ? displayMedia(media, language, t) : undefined };
    },
    [language, pages, media],
  );
}
