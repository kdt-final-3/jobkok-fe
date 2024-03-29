/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "error-50": "#feeaee",
        "error-100": "#fcbec9",
        "error-200": "#fb9faf",
        "error-300": "#f9738b",
        "error-400": "#f85875",
        "error-500": "#f62e52",
        "error-600": "#e02a4b",
        "error-700": "#af213a",
        "error-800": "#87192d",
        "error-900": "#671322",
        "blue-25": "#f9f9fc",
        "blue-50": "#eaeffe",
        "blue-100": "#becefc",
        "blue-200": "#9fb6fb",
        "blue-300": "#7394f9",
        "blue-400": "#5880f8",
        "blue-500": "#2e60f6",
        "blue-600": "#2a57e0",
        "blue-700": "#2144af",
        "blue-800": "#193587",
        "blue-900": "#132867",
        "gray-0": "#fff",
        "gray-50": "#f1f1f2",
        "gray-100": "#d4d5d7",
        "gray-200": "#bfc0c4",
        "gray-300": "#a2a4a9",
        "gray-400": "#909298",
        "gray-500": "#74777e",
        "gray-600": "#6a6c73",
        "gray-700": "#525459",
        "gray-800": "#404145",
        "gray-900": "#313235",
        "title-gray": "#333",
        "preferred-50": "#e3fce9",
        "preferred-500": "#24b782",
        "keyword-50": "#fef9e5",
        "keyword-500": "#f58f31",
        "badge-blue": "#ecf0fe",
        "badge-purple": "#f6eeff",
        "badge-red": "#ffecea",
        "text-on-badge-blue-50": "#637397",
        "text-on-badge-blue": "#1255b1",
        "text-on-badge-purple": "#5e3fc3",
        "text-on-badge-red": "#c41835",
        "stroke-on-blue-400": "rgba(255, 255, 255, 0.5)",
        "banner-teal-500": "#00bdf5",
      },
      fontFamily: {
        pretendard: ["Pretendard"],
      },
      boxShadow: {
        job: "0px 2px 5px rgba(0, 19, 51, 0.1), 0px 0px 0px rgba(0, 19, 51, 0.1);",
        job2: "0 0 18px 0 rgba(191, 192, 196, 0.18)",
        blue: "0px 0px 18px rgba(83, 120, 230, 0.18);",
      },
      spacing: {
        "6px": "0.375rem",
      },
    },
  },
  daisyui: {
    themes: false,
  },
  plugins: [require("daisyui")],
};
