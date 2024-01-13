module.exports = {
    content: ['./src/index.html'],
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
            borderWidth: {
            },
            height: {
            }
            /* textShadow: {
                'default': '2px 2px 4px rgba(0,0,0,0.5)',
                'lg': '0px 0px 8px rgba(0,0,0,0.7)',
            }, */
        },
    },
    variants: {},
    plugins: [
    ]
/*     plugins: [
        require('tailwindcss-textshadow'),
    ], */
}