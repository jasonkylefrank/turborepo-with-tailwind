import * as React from "react";

export const Card = ({
  title,
  cta,
  href,
}: {
  title: string;
  cta: string;
  href: string;
}) => {
  return (
    // <a
    //   target="_blank"
    //   rel="noopener noreferrer"
    //   href={href}
    //   className="ui-group ui-mt-4 ui-rounded-lg ui-border ui-border-transparent ui-overflow-hidden ui-bg-origin-border ui-bg-gradient-to-r ui-from-brandred ui-to-brandblue ui-text-[#6b7280]"
    // >
    //   <div className="ui-p-4 ui-bg-zinc-900 ui-h-full">
    //     <p className="ui-inline-block ui-text-xl ui-text-white">{title}</p>
    //     <div className="ui-text-xs ui-mt-4 group-hover:ui-underline">
    //       {cta} →
    //     </div>
    //   </div>
    // </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group mt-4 rounded-lg border border-transparent overflow-hidden bg-origin-border bg-gradient-to-r from-brandred to-brandblue text-[#6b7280]"
    >
      <div className="p-4 bg-zinc-900 h-full">
        <p className="inline-block text-xl text-white">{title}</p>
        <div className="text-xs mt-4 group-hover:underline">
          {cta} →
        </div>
      </div>
    </a>
  );
};
