import Typography from 'typography';
import githubViewTheme from 'typography-theme-github';

const typography = new Typography(githubViewTheme);

// Insert styles directly into the <head>
typography.injectStyles();

export default typography;