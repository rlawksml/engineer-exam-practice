"use client";

import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import c from "highlight.js/lib/languages/c";
import java from "highlight.js/lib/languages/java";
import python from "highlight.js/lib/languages/python";
import sql from "highlight.js/lib/languages/sql";

hljs.registerLanguage("c", c);
hljs.registerLanguage("java", java);
hljs.registerLanguage("python", python);
hljs.registerLanguage("sql", sql);

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.removeAttribute("data-highlighted");
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className="rounded-lg overflow-hidden my-4 border border-gray-700">
      {language && (
        <div className="bg-gray-800 px-4 py-1.5 text-xs text-gray-400 font-mono uppercase border-b border-gray-700">
          {language}
        </div>
      )}
      <pre className="bg-gray-900 p-4 overflow-x-auto text-sm leading-relaxed">
        <code ref={codeRef} className={language ? `language-${language}` : ""}>
          {code}
        </code>
      </pre>
    </div>
  );
}
