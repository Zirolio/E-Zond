import type { SETTINGS_SCHEMA } from "@/constants";

export interface BaseSettingConfig {
    type: "checkbox" | "range";
    // title: string;
}

export interface RangeSettingConfig extends BaseSettingConfig {
    min: number;
    max: number;
    step: number;
    defaultValue?: number;
}

export interface CheckboxSettingConfig extends BaseSettingConfig {
    defaultValue?: boolean;
}

export type SettingConfig = RangeSettingConfig | CheckboxSettingConfig;
export type InferValue<T> =
    T extends { type: "range"; defaultValue: number } ? number :
    T extends { type: "checkbox"; defaultValue: boolean } ? boolean :
    never;

/* export type SettingsSchema = Array<{
    name: string;
    folders: {
        [folder: string]: {
            [option: string]: SettingConfig
        }
    }
}>;

export type BuildStateFromSchema<S extends SettingsSchema> = {
  [T in S[number] as T["name"]]: {
    [F in keyof T["folders"]]: {
      [O in keyof T["folders"][F]]: InferValue<T["folders"][F][O]>;
    };
  };
}; */

export type SchemaItem = {
    name: string;
    folders: Record<string, Record<string, SettingConfig>>;
};

export type SettingsSchema = readonly SchemaItem[];

export type BuildStateFromItem<T extends SchemaItem> = {
    [F in keyof T["folders"]]: {
        [O in keyof T["folders"][F]]: InferValue<T["folders"][F][O]>;
    };
};

export type BuildState<S extends readonly SchemaItem[]> = {
    [I in S[number] as I["name"]]: BuildStateFromItem<I>;
};

export type SettingsSchemaConfig = typeof SETTINGS_SCHEMA;