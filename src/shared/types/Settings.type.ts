export interface BaseSettingConfig {
    type: "checkbox" | "range"; //  | "select" | "color";
    label?: string;
    description?: string;
}
export interface RangeSettingConfig extends BaseSettingConfig {
    type: "range";
    min: number;
    max: number;
    step: number;
    defaultValue?: number;
}
export interface CheckboxSettingConfig extends BaseSettingConfig {
    type: "checkbox";
    defaultValue?: boolean;
}
export type SettingConfig = RangeSettingConfig | CheckboxSettingConfig;



export type SchemaItem = {
    name: string;
    folders: Record<string, Record<string, SettingConfig>>;
};

export type InferValue<T> =
    T extends { type: "range"; defaultValue: number } ? number :
    T extends { type: "checkbox"; defaultValue: boolean } ? boolean :
    never;

export type BuildStateFromItem<T extends SchemaItem> = {
    [F in keyof T["folders"]]: {
        [O in keyof T["folders"][F]]: InferValue<T["folders"][F][O]>;
    };
};

export type BuildState<S extends readonly SchemaItem[]> = {
    [I in S[number] as I["name"]]: BuildStateFromItem<I>;
};

export type SettingsSchema = readonly SchemaItem[];