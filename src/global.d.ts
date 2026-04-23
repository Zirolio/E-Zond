import type Client from "./client/Client";

declare global {
    interface Window {
        _client: Client;
    }

    interface ImportMetaEnv {
        readonly SCRIPT_VERSION: string;
        readonly SCRIPT_NAME: string;
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}

export {};