export interface Profile {

	name: string
	
	best_game: {
		group: string
		score: number
	}

	best_games_by_group: [
		{
			group: string,
			score: number
		}
	]
}