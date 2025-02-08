import api from "../../axios"
import { Player, TeamInformation } from "./interface"

export async function getTeamPlayer(teamid: number) {
    const { data } = await api.get<Player[]>(`/team/${teamid}/players`)
    return data
}