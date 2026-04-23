import type { SettingsSchema } from "./shared/types/Settings.type";

export const SCRIPT_VERSION = import.meta.env.SCRIPT_VERSION
export const SCRIPT_NAME = import.meta.env.SCRIPT_NAME;

export const LOGGER_NAME = SCRIPT_NAME;

export const LOCAL_STORAGE_SETTINGS_KEY = "e-zond.settings";
export const SETTINGS_SCHEMA = [
    {
        name: "Camera",
        folders: {
            Zoom: {
                zoom: {
                    type: "range",
                    min: 0.35,
                    max: 1,
                    step: 0.02,
                    defaultValue: 0.5,
                    description: "Zoom scale"
                },
                fov: {
                    type: "range",
                    min: 30,
                    max: 120,
                    step: 1,
                    defaultValue: 75,
                },
                fullArea: {
                    type: "checkbox",
                    defaultValue: false,
                },
            },
            Movement: {
                sensitivity: {
                    type: "range",
                    min: 0.1,
                    max: 10,
                    step: 0.1,
                    defaultValue: 1,
                },
            },
        },
    },
    {
        name: "Characters",
        folders: {
            Visual: {
                scale: {
                    type: "range",
                    min: 0.5,
                    max: 2,
                    step: 0.01,
                    defaultValue: 1,
                },
            },
        },
    }
] as const satisfies SettingsSchema;