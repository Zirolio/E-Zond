import { SCRIPT_NAME } from "@/constants";
import { client } from "@/main";
import type { BuildState, SchemaItem, SettingConfig, SettingsSchema } from "@shared/types/Settings.type";
import { Pane, type BindingParams } from "tweakpane";

type AnyObjectMap = Record<string, object>;
type SettingsValues = Record<string, number | boolean>;
type SettingsGroup = Record<string, SettingsValues>;

export default class Settings<S extends SettingsSchema> {
    private readonly localStorageKey: string;
    private readonly settingsSchema: S;
    public state: BuildState<S>;
    private pane!: Pane;

    constructor(settingsSchema: S, localStorageKey: string) {
        this.localStorageKey = localStorageKey;
        this.settingsSchema = settingsSchema;
        this.state = this.buildState(settingsSchema);
    }

    private getBindingParams(option: SettingConfig): BindingParams {
        switch (option.type) {
            case "range":
                return {
                    min: option.min,
                    max: option.max,
                    step: option.step,
                };

            case "checkbox":
                return {};

            /* case "select":
                return {
                    options: option.options
                };

            case "color":
                return {
                    view: "color"
                }; */
        }
    }
    
    private buildPane() {
        this.pane = new Pane({ title: `${SCRIPT_NAME} Settings` });
        this.pane.hidden = true;
        
        const settingsPage = this.pane; // this.pane.addTab({ pages: [{ title: `${SCRIPT_NAME} Settings` }] }).pages[0];
        // this.makeDraggable(settingsPage.element, this.pane.element);

        const tabApi = settingsPage.addTab({ pages: this.settingsSchema.map(page => ({ title: page.name })) });
        for (let i = 0; i < this.settingsSchema.length; i++) {
            const pageApi = tabApi.pages[i];
            const folders = this.settingsSchema[i].folders;

            for (const [folderName, folder] of Object.entries(folders)) {
                const folderApi = pageApi.addFolder({ title: folderName });

                for (const [optionName, option] of Object.entries<SettingConfig>(folder)) {
                    const input = folderApi.addBinding(
                        ((this.state as AnyObjectMap)[this.settingsSchema[i].name] as SettingsGroup)[folderName],
                        optionName,
                        {
                            label: option.label ?? optionName,
                            ...this.getBindingParams(option)
                        }
                    );

                    if (optionName === "zoom") {
                        input.on("change", () => {
                            client.camera.rezoom();
                        });
                    }
                    
                    /* this.state.value = 1;
                    folderApi.addBinding(this.state, "value", {
                        view: "monitor",
                        readonly: true
                    }); */
                    /* folderApi.addBlade({
                        view: "separator"
                    }); */
                }
            }

            pageApi.addButton({ title: "Reset" }).on("click", () => {
                this.reset(this.settingsSchema[i].name);
            });
        }

        this.pane.addButton({ title: "Hide" }).on("click", () => this.hide());
    }

    /* private makeDraggable(header: HTMLElement, settingsElement: HTMLElement) {
        settingsElement.style.position = "fixed";
        settingsElement.style.top = "20px";
        settingsElement.style.left = "20px";
        settingsElement.style.zIndex = "9999";

        let offsetX = 0;
        let offsetY = 0;
        let dragging = false;

        const onMouseMove = (e: MouseEvent) => {
            if (!dragging) return;

            settingsElement.style.left = `${e.clientX - offsetX}px`;
            settingsElement.style.top = `${e.clientY - offsetY}px`;
        };

        const onMouseUp = () => {
            dragging = false;
            document.removeEventListener("mousemove", onMouseMove);
            document.removeEventListener("mouseup", onMouseUp);
        };

        header.addEventListener("mousedown", (e) => {
            if (e instanceof MouseEvent) {
                dragging = true;
    
                const rect = settingsElement.getBoundingClientRect();
                offsetX = e.clientX - rect.left;
                offsetY = e.clientY - rect.top;
    
                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
            }
        });
    } */

    private buildState<S extends readonly SchemaItem[]>(schema: S): BuildState<S> {
        const state = {} as BuildState<S>;

        for (const page of schema) {
            const folderState = (state as AnyObjectMap)[page.name] = {};

            for (const [folderName, folder] of Object.entries(page.folders)) {
                const optionsState = (folderState as AnyObjectMap)[folderName] = {};
                
                for (const [optionName, { type, defaultValue }] of Object.entries(folder)) {
                    const optionValue = defaultValue ?? (type === "checkbox" ? false : 0);
                    (optionsState as SettingsValues)[optionName] = optionValue;
                }
            }
        }

        return state;
    }

    init() {
        if (!this.pane) {
            this.buildPane();
            window.addEventListener("keydown", e => {
                if (e.altKey && e.code === "KeyZ") this.toggle();
            });
        }
    }
    reset(tab: string) {
        const defaultState = this.buildState(this.settingsSchema);
        const defaultTabStae = this.settingsSchema.find(t => t.name === tab);
        if (defaultTabStae) {
            (this.state as AnyObjectMap)[tab] = (defaultState as AnyObjectMap)[defaultTabStae.name];
            this.pane.dispose();
            this.buildPane();
        }
    }
    
    save() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.state));
    }
    load() {
        const data = localStorage.getItem(this.localStorageKey);
        if (data) this.state = JSON.parse(data);
    }

    show() { this.pane.hidden = false; }
    hide() { this.pane.hidden = true; }
    toggle() { this.pane.hidden = !this.pane.hidden; }
}