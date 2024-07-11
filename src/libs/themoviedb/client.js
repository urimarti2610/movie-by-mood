export class TheMovieDbClient {
    locale = Intl.DateTimeFormat().resolvedOptions().locale
    apiKey = 'cea68b520beecac6718820e4ac576c3a'
    baseUrl = 'https://api.themoviedb.org/3/'

    async getMoviesByGenreId(id) {
        const response = await fetch(`${this.baseUrl}discover/movie?include_adult=true&include_video=true&with_genres=${id}&api_key=${this.apiKey}&language=${this.locale}`)
        const { results } = await response.json()

        return results
    }

    async getWhereToWatch(movie) {
        const locale = this.locale.split('-')[1] ?? 'US'

        const response = await fetch(`${this.baseUrl}movie/${movie.id}/watch/providers?api_key=${this.apiKey}`)
        const { results } = await response.json()

        return results[locale] ?? {}
    }
}