import api from "../../axios"
import { TeamDefensiveStatsBySeason, TeamDividedStatsBySeason, TeamResult, TeamGamesBySeason, TeamGraph, TeamStats, TeamHistogram, ConferenceRanking, TeamInformation } from "./interface"

export async function getTeamInformation(teamid: number) {
    const { data } = await api.get<TeamInformation>(`/team/${teamid}/info`)
    return data
}

export async function getTeamRanking() {
    const { data } = await api.get<ConferenceRanking>(`/teams/ranking`)
    return data
}

export async function getTeamResult(teamid: number) {
    const { data } = await api.get<TeamResult>(`/team/${teamid}/results`)
    return data
}

export async function getTeamStats(teamid: number) {
    const { data } = await api.get<TeamStats>(`/team/${teamid}/general_stats`)
    return data
}

export async function getTeamStatsDivided(teamid: number) {
    const { data } = await api.get<TeamDividedStatsBySeason>(`/team/${teamid}/divided_stats`)
    return data
}

export async function getTeamStatsDefensive(teamid: number) {
    const { data } = await api.get<TeamDefensiveStatsBySeason>(`/team/${teamid}/defensive_stats`)
    return data
}

export async function getTeamGames(teamid: number) {
    const { data } = await api.get<TeamGamesBySeason>(`/team/${teamid}/games`)
    return data
}

export async function getTeamWinGraphBar(teamid: number) {
    const { data } = await api.get<TeamGraph>(`/team/${teamid}/graph/bar_win_loss`)
    return data
}

export async function getTeamWinGraphPie(teamid: number) {
    const { data } = await api.get<TeamGraph>(`/team/${teamid}/graph/pie_win_loss`)
    return data
}

export async function getTeamWinGraphBarHomeAway(teamid: number) {
    const { data } = await api.get<TeamGraph>(`/team/${teamid}/graph/bar_home_away`)
    return data
}

export async function getTeamWinGraphHistogram(teamid: number) {
    const { data } = await api.get<TeamHistogram>(`/team/${teamid}/graph/histogram_win_loss`)
    return data
}

export async function getTeamPointsGraph(teamid: number) {
    const { data } = await api.get<TeamGraph>(`/team/${teamid}/graph/radar_points`)
    return data
}

export async function getTeamGraphLines(teamid: number) {
    const { data } = await api.get<TeamGraph>(`/team/${teamid}/graph/line_win_streak`)
    return data
}

export async function getTeamGraphScatter(teamid: number) {
    const { data } = await api.get<TeamGraph>(`/team/${teamid}/graph/scatter_points`)
    return data
}