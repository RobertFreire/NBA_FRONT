import api from "../../axios"
import { Player, PlayerGame, PlayerGamesHomeAndAway, PlayerSeasonVsCareer, PlayerStats } from "./interface"

export async function getTeamPlayer(teamid: number) {
    const { data } = await api.get<Player[]>(`/team/${teamid}/players`)
    return data
}

export async function getPlayer(playerid: number) {
    const { data } = await api.get<Player>(`/player/${playerid}`)
    return data
}

export async function getPlayerStats(playerid: number) {
    const { data } = await api.get<PlayerStats>(`/player/${playerid}/stats`)
    return data
}

export async function getPlayerSeasonVsCareer(playerid: number) {
    const { data } = await api.get<PlayerSeasonVsCareer>(`/player/${playerid}/season_vs_career`)
    return data
}

export async function getPlayerGames(playerid: number) {
    const { data } = await api.get<PlayerGame[]>(`/player/${playerid}/games`)
    return data
}

export async function getPlayerGamesHomeAndAway(teamid: number, playerid: number, opponent?: string) {
    const { data } = await api.get<PlayerGamesHomeAndAway[]>(`/team/${teamid}/player/${playerid}/home_away_games${opponent ? `?opponent=${opponent}` : ''}`)
    return data
}

