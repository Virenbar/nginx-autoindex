/* eslint-disable @typescript-eslint/no-unused-vars */
declare interface Item {
  name: string
  type: "directory" | "file"
  mtime: Date
  size?: number
  url: string
}
