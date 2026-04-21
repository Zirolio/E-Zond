import { SETTINGS_SCHEMA } from "@/constants";
import type { BuildState, SchemaItem } from "@shared/types/Settings.type";
import { Pane } from "tweakpane";

export default class Settings {
    public state = this.buildState(SETTINGS_SCHEMA);
    private pane!: Pane;

    init() {
        // this.buildPane();
    }
    
    /* private buildPane() {
        this.pane = new Pane();

        const tabApi = this.pane.addTab({ pages: SETTINGS_SCHEMA.map(page => ({ title: page.name })) });
        for (let i = 0; i < SETTINGS_SCHEMA.length; i++) {
            const pageApi = tabApi.pages[i];
            const folders = SETTINGS_SCHEMA[i].folders;

            for (const [folderName, folder] of Object.entries(folders)) {
                pageApi.addFolder({ title: folderName });
            }
        }
    } */
    

    private buildState<S extends readonly SchemaItem[]>(schema: S): BuildState<S> {
        const state = {} as BuildState<S>;

        for (const page of schema) {
            const folderState = (state as Record<string, object>)[page.name] = {};

            for (const [folderName, folder] of Object.entries(page.folders)) {
                const optionsState = (folderState as Record<string, object>)[folderName] = {};
                
                for (const [optionName, { type, defaultValue }] of Object.entries(folder)) {
                    const optionValue = defaultValue ?? type === "checkbox" ? false : 0;
                    (optionsState as Record<string, number | boolean>)[optionName] = optionValue;
                }
            }
        }

        return state;
    }

    /* private buildState<S extends SettingsSchema>(
        schema: S
    ): BuildStateFromSchema<S> {
        const state = {} as BuildStateFromSchema<S>;
        const tabs = Object.keys(schema) as (keyof S)[];

        for (const tab of tabs) {
            const folders = Object.keys(schema[tab]) as (keyof S[typeof tab])[];
            state[tab] = {} as BuildStateFromSchema<S>[typeof tab];

            for (const folder of folders) {
                const options = Object.keys(schema[tab][folder]) as (keyof S[typeof tab][typeof folder])[];
                state[tab][folder] = {} as BuildStateFromSchema<S>[typeof tab][typeof folder];

                for (const option of options) {
                    const cfg = schema[tab][folder][option];
                    if (cfg.type === "range") {
                        state[tab][folder][option] = cfg.default as InferValue<typeof cfg>;
                    } else if (cfg.type === "checkbox") {
                        state[tab][folder][option] = cfg.default as InferValue<typeof cfg>;
                    }
                }
            }
        }

        return state;
    } */

    show() { this.pane.hidden = false; }
    hide() { this.pane.hidden = true; }
    totage() { this.pane.hidden = !this.pane.hidden; }
}