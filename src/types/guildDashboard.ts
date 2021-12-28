export interface QuickSuggestionI {
  title: string;
  description: string;
  condition: (guildSettings: GuildSettingsI) => boolean;
}

export interface GuildSettingsI {
  guildID: number;
}

export interface SettingsMenuItemI {
  name: string;
  icon: string;
  path: string;
}