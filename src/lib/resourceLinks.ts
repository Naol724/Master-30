import { libraryData } from "@/data/library";

/** Match curriculum resource labels to Knowledge Vault book titles/links. */
const RESOURCE_BOOK_MATCHERS: { match: RegExp; bookTitle: string }[] = [
  { match: /millionaire mindset/i, bookTitle: "The Millionaire Mindset" },
  { match: /rich dad poor dad/i, bookTitle: "Rich Dad Poor Dad" },
  { match: /lean startup/i, bookTitle: "The Lean Startup" },
  { match: /mom test/i, bookTitle: "The Mom Test" },
  { match: /\binfluence\b/i, bookTitle: "Influence" },
  { match: /zero to one/i, bookTitle: "Zero to One" },
  { match: /4-hour workweek|4 hour workweek/i, bookTitle: "The 4-Hour Workweek" },
];

const bookByTitle = new Map(
  libraryData.map((book) => [book.title.toLowerCase(), book]),
);

export type ResolvedResource = {
  label: string;
  href?: string;
};

export function resolveResourceLink(resourceLabel: string): ResolvedResource {
  for (const { match, bookTitle } of RESOURCE_BOOK_MATCHERS) {
    if (!match.test(resourceLabel)) continue;
    const book = bookByTitle.get(bookTitle.toLowerCase());
    if (book?.link) {
      return { label: resourceLabel, href: book.link };
    }
    return { label: resourceLabel };
  }
  return { label: resourceLabel };
}
