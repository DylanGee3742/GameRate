import { GameCard } from "../components/GameCard"

  // Make calls to API's in back-end to fill these in 
export const listFill = (filter) => {
    const filterValue = filter || 'Trending'
    let list = []
    for (let i = 0; i < 8; i++) {
        list.push({filterValue: filterValue, game: <GameCard filter={filter} />, id: i, review: "Heres some text", title: filterValue})
      }
    return list
}