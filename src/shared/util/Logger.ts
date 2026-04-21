import { BASE_LOGGER_STYLE, LOGGER_NAME } from "@/constants";

export default class Logger {
    private static readonly baseStyle = BASE_LOGGER_STYLE;

    public static log(...args: unknown[]) {
        console.log(`%c[${LOGGER_NAME}]`, `${this.baseStyle} background:#3498db;`, ...args);
    }

    public static info(...args: unknown[]) {
        console.info(`%c[${LOGGER_NAME}]`, `${this.baseStyle} background:#2ecc71;`, ...args);
    }

    public static warn(...args: unknown[]) {
        console.warn(`%c[${LOGGER_NAME}]`, `${this.baseStyle} background:#f1c40f; color:black;`, ...args);
    }

    public static error(...args: unknown[]) {
        console.error(`%c[${LOGGER_NAME}]`, `${this.baseStyle} background:#e74c3c;`, ...args);
    }
}