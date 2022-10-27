/** @type {import('tailwindcss').Config} */
module.exports = {
  //diz que todo arquivo com essa terminação vai usar o css
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      "2xl": 32,
    },

    //fora do extend: substituo as cores do tailwind pelas minhas

      purple:{
      900: '#363062',
      500: '#4D4C7D',
      400: '#827397',
    },
    pink:{
      100: '#E9D5CA',

    },

    //mantenho as configurações que o tailwind já tem e add as minhas
    extend: {
      fontFamily: {
        sans: "Inter, sans-serif",
      },
    },
  },
  plugins: [],
};
