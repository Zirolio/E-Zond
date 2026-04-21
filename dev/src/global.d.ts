declare global {
    namespace NodeJS {
        interface ProcessEnv {
            readonly FILE_PATH: string;
        }
    }
    
    interface Window {
        __EZOND__: boolean;
    }
}

export {};