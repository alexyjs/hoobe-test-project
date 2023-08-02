// Regular expressions for common social platforms
const SOCIAL_PLATFORM_REGEXES: { [key: string]: RegExp } = {
  instagram: /instagram\.com\/([a-zA-Z0-9_]+)/i,
  threads: /threads\.net\/@([a-zA-Z0-9_]+)/i,
  tiktok: /tiktok\.com\/@([a-zA-Z0-9_]+)/i,
  twitter: /twitter\.com\/([a-zA-Z0-9_]+)/i,
  // Add more social platforms here as needed
};

// Function to get the social name from the link
export function getSocialNameFromLink(link: string): string | null {
  for (const platform in SOCIAL_PLATFORM_REGEXES) {
    if (link.match(SOCIAL_PLATFORM_REGEXES[platform])) {
      return platform;
    }
  }
  return null;
}
