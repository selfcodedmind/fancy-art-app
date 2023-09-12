export type TArtwork = {
  _score: number
  date_end: number
  artist_title: string
  image_id: string
  title: string
  color: {
    h: number
    l: number
    percentage: number
    population: number
    s: number
  }
}

export type TArtworksSearchResponse = {
  preference: null
  pagination: {
    total: number
    limit: number
    offset: number
    total_pages: number
    current_page: number
  }
  data: TArtwork[]
  info: {
    license_text: string
    license_links: string[]
    version: string
  }
  config: {
    iiif_url: string
    website_url: string
  }
}

export type TLoadBy = 18 | 36 | 54
