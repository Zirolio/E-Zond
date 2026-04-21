import type Client from "./client/Client";

declare global {
    interface Window {
        _client: Client;
    }
}

export {};