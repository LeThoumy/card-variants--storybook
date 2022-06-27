import { createStitches } from '@stitches/react';


import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  reset,
  createTheme,
  config,
} = createStitches({
  media: {
    bp1: '(min-width: 320px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1200px)',
    motion: '(prefers-reduced-motion)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  theme: {
    colors: {
      /* -------------------------------------------------------------------------- */
      /*                                Global Colors                               */
      /* -------------------------------------------------------------------------- */
      blueReg500: 'hsla(207, 98%, 40%, 1)',
      blueReg600: 'hsl(208,100%,32%, 1)',
      blueReg200: 'hsla(205, 100%, 81%, 1)',
      blueAccent400Transparent: 'hsla(206, 100%, 51%, 1)',
      blueAccent500Transparent: 'hsla(203, 100%, 59%, 0.1)',
      blueMuted: 'hsla(206, 48%, 24%, 1)',

      /* -------------------------------------------------------------------------- */
      /*                                Alias Colors                                */
      /* -------------------------------------------------------------------------- */
      /* ----------------------------- Background/Main ---------------------------- */
      bgPrimary: 'hsla(0, 0%, 100%, 1)',
      bgSecondary: 'hsla(200, 28%, 96%, 1)',
      bgTertiary: 'hsla(200, 29%, 92%, 1)',
      bgSecondaryTransparent: 'hsla(205, 29%, 66%, 0.1)',
      /* --------------------------- Background/Status ---------------------------- */
      bgInformative: 'hsla(194, 100%, 92%, 1)',
      bdInformativeTransp: 'hsla(203, 100%, 59%, 0.2)',
      bgNegative: 'hsla(4, 100%, 93%, 1)',
      bgPositive: 'hsla(139, 90%, 90%, 1)',
      bgNotice: 'hsla(34, 100%, 87%, 1)	',
      bgSpecial: 'hsla(48, 100%, 86%, 1)',
      /* ------------------------------- Border/Main ------------------------------ */
      bdPrimary: 'hsla(206, 48%, 24%, 0.1)',
      bdSecondary: 'hsla(203, 26%, 86%, 1)',
      bdTertiary: 'hsla(204, 30%, 76%, 1)',
      /* ------------------------------- Border/Status ---------------------------- */
      bdInformative: 'hsla(196, 100%, 82%, 1)',
      bdNegative: 'hsla(2, 100%, 88%, 1)',
      bdPositive: 'hsla(141, 84%, 81%, 1)',
      bdNotice: 'hsla(32, 100%, 79%, 1)',
      bdSpecial: 'hsla(32, 100%, 79%, 1)',
      /* -------------------------------- Text/Main ------------------------------- */
      txtPrimary: 'hsla(206, 48%, 24%, 1)',
      txtSecondary: 'hsla(206, 32%, 39%, 1)',
      txtTertiary: 'hsla(205, 22%, 53%, 1)',
      txtQuaternary: 'hsla(205, 29%, 66%, 1)',
      txtOverBg: 'hsla(0, 0%, 100%, 1)',
      /* ------------------------------- Text/Status ------------------------------ */
      txtLink: 'hsla(207, 98%, 40%, 1)',
      txtInformative: 'hsla(206, 48%, 24%, 1)',
      txtNegative: 'hsla(349, 21%, 21%, 1)',
      txtPositive: 'hsla(162, 25%, 20%, 1)',
      txtNotice: 'hsla(28, 25%, 19%, 1)',
      txtSpecial: 'hsla(37, 26%, 20%, 1)',
      /* --------------------------------- Shadow --------------------------------- */
      shLight: 'hsla(206, 48%, 24%, 0.1)',
      shBold: 'hsla(206, 48%, 24%, 0.2)',
      shHeavy: 'hsla(206, 48%, 24%, 0.5)',
      /* ---------------------------------- Icon ---------------------------------- */
      iconPrimary: 'hsla(205, 25%, 53%, 1)',
      iconPositive: 'hsla(147, 71%, 49%, 1)',
    },
    space: {
      /* -------------------------------------------------------------------------- */
      /*                                 Space Scale                                */
      /* -------------------------------------------------------------------------- */
      x1: '8px', //Base = 8px
      /* ------------------------ Space Scale/Interpolation ------------------------ */
      xdot25: 'calc($x1 * 0.25)',
      xdot5: 'calc($x1 * 0.5)',
      x1dot5: 'calc($x1 * 1.5)',
      x2: 'calc($x1 * 2)',
      x2dot5: 'calc($x1 * 2.5)',
      x3: 'calc($x1 * 3)',
      x6: 'calc($x1 * 6)',
      x8: 'calc($x1 * 8)',
      x10: 'calc($x1 * 10)',
    },
    fontSizes: {
      /* -------------------------------------------------------------------------- */
      /*                                 Type Scale                                 */
      /* -------------------------------------------------------------------------- */
      base: '16px', //Base = 16px
      /* ------------------------ Type Scale/Interpolation ------------------------ */
      xxs: 'calc($base * 0.5625)',
      xs: 'calc($base * 0.625)',
      sm: 'calc($base * 0.75)',
      md: 'calc($base * 0.875)',
      lg: 'calc($base * 1)',
      xl: 'calc($base * 1.125)',
      xxl: 'calc($base * 4)',
    },
    radii: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '24px',
      round: '50%',
      pill: '100vw',
    },
    shadows: {
      sm: '0px 1px 1px hsla(206, 48%, 24%, 0.1), 0px 2px 4px hsla(206, 48%, 24%, 0.1)',
      md: '0px 1px 4px hsla(206, 48%, 24%, 0.1), 0px 6px 12px hsla(206, 48%, 24%, 0.1)',
    }
  },
  utils: {
    w: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
    }),
    h: (value: Stitches.PropertyValue<'height'>) => ({
      height: value,
    }),
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),

    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),

    ta: (value: Stitches.PropertyValue<'textAlign'>) => ({ textAlign: value }),

    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({ flexDirection: value }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),

    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({ alignItems: value }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({ alignContent: value }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({ justifyContent: value }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({ alignSelf: value }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'flexShrink'>) => ({ flexShrink: value }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({ flexBasis: value }),

    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),

    bdr: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderRadius: value,
    }),
    bdrb: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderBottomLeftRadius: value,
      borderBottomRightRadius: value,

    }),
    bdrt: (value: Stitches.PropertyValue<'borderRadius'>) => ({
      borderTopLeftRadius: value,
      borderTopRightRadius: value,

    }),

    bs: (value: Stitches.PropertyValue<'boxShadow'>) => ({ boxShadow: value }),

    lh: (value: Stitches.PropertyValue<'lineHeight'>) => ({ lineHeight: value }),

    ox: (value: Stitches.PropertyValue<'overflowX'>) => ({ overflowX: value }),
    oy: (value: Stitches.PropertyValue<'overflowY'>) => ({ overflowY: value }),

    pe: (value: Stitches.PropertyValue<'pointerEvents'>) => ({ pointerEvents: value }),
    us: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    userSelect: (value: Stitches.PropertyValue<'userSelect'>) => ({
      WebkitUserSelect: value,
      userSelect: value,
    }),

    size: (value: Stitches.PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),

    appearance: (value: Stitches.PropertyValue<'appearance'>) => ({
      WebkitAppearance: value,
      appearance: value,
    }),
    backgroundClip: (value: Stitches.PropertyValue<'backgroundClip'>) => ({
      WebkitBackgroundClip: value,
      backgroundClip: value,
    }),
  }
})

const injectGlobalStyles = globalCss({
  "*": {
    fontFamily: "Codec",
    fontWeight: '400',
    margin: '0',
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
  "*:after": { boxSizing: "border-box" },
  "*:before": { boxSizing: "border-box" },
  'button': { border: 'none', opacity: '1', transition: 'opacity 0.3s ease-out' },
  'button>span': { cursor: 'pointer' },
  'button:hover': { opacity: '0.9', boxShadow: '$md', transition: 'opacity 0.2s ease-in' },
  'button:active': { opacity: '0.7', boxShadow: '$sm', transition: 'opacity 0.1s linear' },

})

injectGlobalStyles()


