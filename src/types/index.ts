export interface Carpets {
  name: string
  path: string
  isDir: boolean
  children?: Carpets[]
  metadata?: {
    file: string
  }
}
