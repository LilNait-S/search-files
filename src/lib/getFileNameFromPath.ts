export function getFileNameFromPath(path: string) {
  const parts = path.split("/")
  return parts[parts.length - 1]
}
