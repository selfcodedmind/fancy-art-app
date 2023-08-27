import { apiService } from '@/services/apiService'
import type { TArtworksSearchResponse } from '@/types/artworksTypes'
import type { TViewBy } from '@/types/artworksTypes'

class ArtworksService {
  async searchArtworks(searchQuery: string, viewBy: TViewBy, page: number) {
    return await apiService.get<TArtworksSearchResponse>('v1/artworks/search', {
      params: {
        q: searchQuery,
        fields: 'image_id',
        limit: viewBy,
        page
      }
    })
  }
}

export const artworksService = new ArtworksService()
