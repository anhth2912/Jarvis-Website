// FIXME: Incorrect implementation
export const formatDurationVideo = (duration: string) => {
  const timeSplit = duration.split('.')
  return timeSplit.length === 1
    ? `${timeSplit[0]}m`
    : `${timeSplit[0] !== '0' ? timeSplit[0] + 'm' : ''}${timeSplit[1]}s`
}
