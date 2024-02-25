import { GameCard } from "../components/GameCard"

  // Make calls to API's in back-end to fill these in 
export const listFill = (filter) => {
    let list = []
    for (let i = 0; i < 6; i++) {
        list.push({filter: filter, game: <GameCard filter={filter} />})
      }
    return list
}