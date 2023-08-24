export type TArtworksSearchResponse = {
  preference: null
  pagination: {
    total: number
    limit: number
    offset: number
    total_pages: number
    current_page: number
  }
  data: {
    _score: number
    thumbnail: {
      alt_text: string
      width: number
      lqip: string
      height: number
    }
    api_model: string
    is_boosted: boolean
    api_link: string
    id: number
    title: string
    timestamp: string
    image_id: string
  }[]
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
