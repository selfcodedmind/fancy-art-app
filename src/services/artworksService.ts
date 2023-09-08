import { apiService } from '@/services/apiService'
import type { TArtworksSearchResponse } from '@/types/artworksTypes'
import type { TViewBy } from '@/types/artworksTypes'

class ArtworksService {
  async searchArtworks(searchQuery: string, viewBy: TViewBy, page: number) {
    return await apiService.get<TArtworksSearchResponse>('v1/artworks/search', {
      params: {
        q: searchQuery,
        fields: [
          'image_id',
          'title',
          'date_start',
          'date_end',
          'place_of_origin',
          'artwork_type_title',
          'artist_title',
          'style_title',
          'classification_title',
          'subject_titles',
          'material_titles',
          'technique_titles',
          'theme_titles'
        ],
        limit: viewBy,
        page
      }
    })
  }
}

export const artworksService = new ArtworksService()
