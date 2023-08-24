import { apiService } from '@/services/apiService'
import type { TArtworksSearchResponse } from '@/types/artworksTypes'

class ArtworksService {
  async searchArtworks(searchQuery: string) {
    return await apiService.get<TArtworksSearchResponse>('v1/artworks/search', {
      params: {
        q: searchQuery,
        fields: 'image_id'
      }
    })
  }
}

export const artworksService = new ArtworksService()
