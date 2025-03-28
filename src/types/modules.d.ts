declare module '*.css?raw' {
    const styles: string;
    export default styles;
}

declare module '*.html?raw' {
    const html: string;
    export default html;
}