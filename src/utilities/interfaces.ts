export interface Article {
  abstract: string
  byline: string
  created_date: string
  des_facet: string[]
  geo_facet: string[]
  item_type: string
  material_type_facet: string
  multimedia: any[]
  org_facet: string[]
  per_facet: string[]
  published_date: string
  section: string
  short_url: string
  subsection: string
  title: string
  updated_date: string
  uri: string
  url: string
}

export interface CleanedArticle {
  abstract: string
  byline: string
  images: string[]
  publishedDate: string
  title: string
  url: string
}