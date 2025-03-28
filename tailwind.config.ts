import { Config } from 'tailwindcss';

const TailwindConfig: Config = {
    content: ['./dist/**/*.html'],
    
    theme: {
        extend: {
            
            colors: {
                main1: 'rgba(65, 70, 82, 0.75)',
                alpha0: 'rgba(255, 255, 255, 0)'
            },
            padding: {
            },
            fontSize: {
            },
            fontFamily: {
                'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
            },
        },
    },
    variants: {},
    plugins: []
}
export default TailwindConfig;