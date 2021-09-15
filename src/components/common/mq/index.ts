const breakpoints = [320, 768, 992, 1200]
const maxWayBreakPoints = [580, 768, 992, 1200]
export default breakpoints.map(bp => `@media (min-width: ${bp}px)`)
export const maxMQ = maxWayBreakPoints.map(bp => `@media (max-width: ${bp}px)`)