import api from "../../axios"
import { Player, PlayerCareerStats, PlayerGame, PlayerGamesHomeAndAway, PlayerGAMStats, PlayerGumbelStats, PlayerRegressionLinearStats, PlayerRegressionLogisticStats, PlayerSeasonVsCareer, PlayerStats } from "./interface"

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

export async function getPlayerCareerStats(playerid: number) {
    const { data } = await api.get<PlayerCareerStats>(`/player/${playerid}/career_stats`)
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

export async function getPlayerGumbelStats(playerid: number, points: number, rebounds: number, assists: number) {
    const { data } = await api.get<PlayerGumbelStats>(`/player/${playerid}/gumbel?points=${points}&rebounds=${rebounds}&assists=${assists}`)
    return data
}

export async function getPlayerRegressionLinearStats(playerid: number) {
    const { data } = await api.get<PlayerRegressionLinearStats>(`/player/${playerid}/regression`)
    return data
}


export async function getPlayerRegressionLogisticStats(playerid: number) {
    const { data } = await api.get<PlayerRegressionLogisticStats>(`/player/${playerid}/logistic_regression`)
    return data
}

export async function getPlayerGAMStats(playerid: number) {
    const { data } = await api.get<PlayerGAMStats>(`/player/${playerid}/logistic_regression`)
    return data
}


