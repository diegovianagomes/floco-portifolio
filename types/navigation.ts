export type CategoryName =
  | "residencial"
  | "institucional"
  | "interiores"
  | "incorporacao"

export type NavigationItem = {
  category: CategoryName
  title: string
  items: {
    slug: string
    label: string
  }[]
}