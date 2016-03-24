export interface Profile {

	name: string
	email: string
	
	best_game: {
		groupname: string
		score: number
	}

	best_games: [
		{
			groupname: string,
			score: number
		}
	]
}