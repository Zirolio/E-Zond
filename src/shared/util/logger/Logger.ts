import { LOGGER_NAME, SCRIPT_NAME, SCRIPT_VERSION } from "@/constants";
import css from "./Logger.style.scss?inline";

const getStyle = (styleName: string) => css.match(new RegExp(`\\.${styleName}\\s*\\{([^}]*?)\\}`))?.[1];

export default class Logger {
    private static readonly baseStyle = getStyle("base");
    private static readonly logoStyle = getStyle("logo");
    private static readonly injectedStyle = getStyle("injected");
    private static readonly logStyle = getStyle("log");
    private static readonly warnStyle = getStyle("warn");
    private static readonly errorStyle = getStyle("error");
    private static readonly infoStyle = getStyle("info");

    public static getInjectedConfig() {
        return [`%c${SCRIPT_NAME} Injected`, `${this.baseStyle}; ${this.injectedStyle}`];
    }

    public static logo() {
        console.log(`%c${SCRIPT_NAME} ${SCRIPT_VERSION} Loaded`, `${this.baseStyle}; ${this.logoStyle}`);
    }

    public static log(...args: unknown[]) {
        console.log(`%c[${LOGGER_NAME}]`, `${this.baseStyle}; ${this.logStyle}`, ...args);
    }

    public static info(...args: unknown[]) {
        console.info(`%c[${LOGGER_NAME}]`, `${this.baseStyle}; ${this.infoStyle}`, ...args);
    }

    public static warn(...args: unknown[]) {
        console.warn(`%c[${LOGGER_NAME}]`, `${this.baseStyle}; ${this.warnStyle}`, ...args);
    }

    public static error(...args: unknown[]) {
        console.error(`%c[${LOGGER_NAME}]`, `${this.baseStyle}; ${this.errorStyle}`, ...args);
    }
}