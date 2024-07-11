export class TheMovieDbClient {
    apiKey = 'cea68b520beecac6718820e4ac576c3a'
    baseUrl = 'https://api.themoviedb.org/3/'

    async getMoviesByGenreId(id) {
        const response = await fetch(`${this.baseUrl}discover/movie?include_adult=true&include_video=true&with_genres=${id}&api_key=${this.apiKey}`)
        const { results } = await response.json()

        return results
    }

    async getMovieInfo(movie) {
        const response = await fetch(`${this.baseUrl}movie/${movie.id}?api_key=${this.apiKey}`)
        const data = await response.json()

        return {
            ...movie,
            ...data,
        }
    }
}