import type { Plugin } from "@opencode-ai/plugin";

export const NotificationPlugin: Plugin = async ({
  project,
  client,
  $,
  directory,
  worktree,
}) => {
  const isKittyFocused = async (): Promise<boolean> => {
    const result =
      await $`osascript -e 'tell application "System Events" to get name of first application process whose frontmost is true'`.text();
    return result.trim() === "kitty";
  };

  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        const kittyFocused = await isKittyFocused();
        if (!kittyFocused) {
          // MacOS sounds can be found on /System/Library/Sounds
          await $`osascript -e 'display notification "Hey! Waiting for you..." with title "opencode" sound name "Pop"'`;
        }
      }
    },
  };
};