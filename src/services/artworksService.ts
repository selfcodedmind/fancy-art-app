import { apiService } from '@/services/apiService'
import type { TArtworksSearchResponse } from '@/types/artworksTypes'
import type { TLoadBy } from '@/types/artworksTypes'
import Axios from 'axios'
import toast from '@/plugins/toast'

class ArtworksService {
  async searchArtworks(searchQuery: string, viewBy: TLoadBy, page: number) {
    try {
      return await apiService.get<TArtworksSearchResponse>('v1/artworks/search', {
        params: {
          q: searchQuery,
          fields: ['image_id', 'title', 'date_end', 'artist_title', 'color'],
          limit: viewBy,
          page
        }
      })
    } catch (error) {
      if (Axios.isAxiosError(error)) {
        toast.error(error.message)
      } else {
        toast.error('Failed to load artworks')
      }
    }
  }
}

export const artworksService = new ArtworksService()
