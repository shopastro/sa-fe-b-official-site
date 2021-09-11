const breakpoints = [320, 768, 992, 1200]
export default breakpoints.map(bp => `@media (min-width: ${bp}px)`)