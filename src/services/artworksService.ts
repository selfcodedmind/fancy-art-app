import { apiService } from '@/services/apiService'

class ArtworksService {
  async searchArtworks(searchQuery: string) {
    return await apiService.get('v1/artworks/search', {
      params: {
        q: searchQuery,
        fields: 'image_id'
      }
    })
  }
}

export const artworksService = new ArtworksService()
