import type { SettingsSchema } from "./shared/types/Settings.type";

export const LOGGER_NAME = "E-Zond V2"
export const BASE_LOGGER_STYLE = `
    padding: 2px 6px;
    border-radius: 4px;
    font-weight: bold;
    color: white;
`;

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
                },
                fov: {
                    type: "range",
                    min: 30,
                    max: 120,
                    step: 1,
                    defaultValue: 75,
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