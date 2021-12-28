export interface QuickSuggestionI {
  title: string;
  description: string;
  condition: (guildSettings: GuildSettingsI) => boolean;
  actionPath: string;
}

export interface GuildSettingsI {
  guildID: number;
}

export interface SettingsMenuItemI {
  name: string;
  icon: string;
  path: string;
}