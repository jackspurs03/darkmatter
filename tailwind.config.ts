import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        "on-surface": "#e2e2e2",
        "on-tertiary-fixed-variant": "#454747",
        "secondary-fixed-dim": "#bac9ca",
        "on-primary": "#ffffff",
        "secondary": "#bac9ca",
        "inverse-primary": "#30666a",
        "surface-container-lowest": "#0e0e0e",
        "on-secondary": "#253334",
        "on-primary-container": "#62989c",
        "on-tertiary-container": "#8e8f8f",
        "primary-fixed-dim": "#7eaeb1",
        "error-container": "#93000a",
        "outline": "#8b9292",
        "primary": "#7eaeb1",
        "secondary-fixed": "#d6e5e6",
        "secondary-container": "#404e4f",
        "on-error-container": "#ffdad6",
        "surface-container-highest": "#353535",
        "error": "#ffb4ab",
        "outline-variant": "#414848",
        "on-background": "#e2e2e2",
        "background": "#0c0c0c",
        "on-secondary-fixed": "#101e1f",
        "surface-container-high": "#1a1a1a",
        "surface-container": "#151515",
        "inverse-surface": "#e2e2e2",
        "surface-dim": "#0c0c0c",
        "tertiary": "#c6c6c7",
        "on-secondary-fixed-variant": "#3b494a",
        "surface-variant": "#252525",
        "on-surface-variant": "#c1c8c8",
        "primary-fixed": "#b5ecf1",
        "tertiary-fixed": "#e2e2e2",
        "on-primary-fixed-variant": "#124e52",
        "surface-tint": "#7eaeb1",
        "tertiary-container": "#262828",
        "on-primary-fixed": "#002022",
        "on-tertiary": "#2f3131",
        "on-secondary-container": "#afbfc0",
        "surface": "#0c0c0c",
        "on-error": "#690005",
        "surface-bright": "#222222",
        "inverse-on-surface": "#303030",
        "on-tertiary-fixed": "#1a1c1c",
        "tertiary-fixed-dim": "#c6c6c7",
        "surface-container-low": "#111111",
        "primary-container": "#001a1c"
      },
      fontFamily: {
        "headline": ["Noto Serif", "serif"],
        "body": ["Manrope", "sans-serif"],
        "label": ["Manrope", "sans-serif"]
      },
      borderRadius: { "DEFAULT": "0px", "lg": "0px", "xl": "0px", "full": "9999px" },
    }
  }
}
