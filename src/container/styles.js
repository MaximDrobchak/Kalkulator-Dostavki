export const styles = theme => ({
  video: {
    zIndex: -100,
    position: 'fixed',
    right: 0,
    bottom: 0,
    width: 'auto',
    height: 'auto',
    minWidth: '100%',
    minHeight: '100%',

    '@media (min-aspect-ratio: 16/9)': {
      height: '300%',
      top: '-100%'
    },

    '@media (max-aspect-ratio: 16/9)': {
      width: '300%',
      left: '-100%'
    },
    '@supports (object-fit: cover)': {
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      'object-fit': 'cover'
    }
  },
  main: {
    zIndex: 10,
    position: 'relative',
    display: 'block'
  },
  root: {
    boxSizing: 'border-box',
    display: 'flex',

    '@media (max-width: 992px)': {
      flexDirection: 'column'
    },

    '@media (min-width: 992px)': {
      flexDirection: 'row'
    },
  },
  step: {
    position: 'relative',
    marginTop: 70,
    minWidth: 300,
    minHeight: '80vh'
  }
});