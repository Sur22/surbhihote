/* Affiliate only: the eight issues that emerged from the survey's open-ended
   responses, rendered as small azure-bordered cards in the same style as the
   Problems-to-Opportunity and AI-for-Testing flow cards — four per row on
   desktop (two rows), two per row on tablets, one per row on phones. */
const issues = [
  "Speed & stability — platform speed, and speed for processing large orders (known issue).",
  "Makegood processing and synchronization.",
  "Order revisions history.",
  "Searching and filtering not holding.",
  "Redundancy and confusion due to poor naming conventions.",
  "Broken functionalities / workarounds.",
  "Automation of manual tasks.",
  "Issues related to file exports.",
];

export function AffiliateSurveyIssuesCards() {
  return (
    <ul
      role="list"
      aria-label="Major issues from the survey's open-ended responses"
      className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto"
    >
      {issues.map((issue) => (
        <li
          key={issue}
          className="flex items-center rounded-md border border-azure px-3 py-2.5 text-[16px] font-bold leading-snug text-foreground"
        >
          <span>{issue}</span>
        </li>
      ))}
    </ul>
  );
}
