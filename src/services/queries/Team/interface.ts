export interface SeasonResults {
    "Derrotas Fora de Casa": number;
    "Derrotas em Casa": number;
    "Total de Derrotas": number;
    "Total de Jogos": number;
    "Total de Vitorias": number;
    "Vitorias Fora de Casa": number;
    "Vitorias em Casa": number;
}

export interface Results {
    [season: string]: SeasonResults;
}

export interface TeamResult {
    results: Results;
    team_id: number;
}

export interface GeneralStats {
    "Derrotas Fora de Casa": number;
    "Derrotas em Casa": number;
    "Total de Assistencias por Jogo": number;
    "Total de Cestas de 3 Pontos Convertidas": number;
    "Total de Pontos por Jogo": number;
    "Total de Rebotes por Jogo": number;
}

export interface SeasonStats {
    season: string;
    stats: GeneralStats;
    team_id: number;
}

export interface TeamStats {
    [season: string]: SeasonStats;
}

export interface DividedStats {
    "Total de Cestas de 2 Pontos": number;
    "Total de Cestas de 3 Pontos": number;
    "Total de Lances Livres Convertidos": number;
    "Total de Pontos": number;
    "Total de Rebotes": number;
    "Total de Rebotes Defensivos": number;
    "Total de Rebotes Ofensivos": number;
}

export interface TeamDividedStats {
    stats: DividedStats;
    season: string;
    team_id: number;
}

export interface TeamDividedStatsBySeason {
    [season: string]: TeamDividedStats;
}

export interface DefensiveStats {
    "Total de Erros por Jogo": number;
    "Total de Faltas por Jogo": number;
    "Total de Rebotes Defensivos": number;
    "Total de Roubos de Bola": number;
    "Total de Tocos por Jogo": number;
}

export interface TeamDefensiveStats {
    stats: DefensiveStats;
    season: string;
    team_id: number;
}

export interface TeamDefensiveStatsBySeason {
    [season: string]: TeamDefensiveStats;
}

export interface Game {
    "Adversario": string;
    "Casa ou Fora": string;
    "Data do Jogo": string;
    "Pontos do Time": number;
    "Vitoria ou Derrota": string;
}

export interface TeamGames {
    games: Game[];
    season: string;
    team_id: number;
}

export interface TeamGamesBySeason {
    [season: string]: TeamGames;
}

export interface TeamGraph {
    seasons: {
        [season: string]: {
            colors: string[];
            labels: string[];
            values: number[];
        };
    };
    type: string;
}

export interface TeamHistogram {
    seasons: {
        [key: string]: {
            colors: string[];
            dates: string[];
            results: number[];
        };
    };
}

export interface TeamRanking {
    ConferenceRank: number;
    TeamCity: string;
    TeamID: number;
    TeamName: string;
}

export interface ConferenceRanking {
    "Conferencia Leste": TeamRanking[];
    "Conferencia Oeste": TeamRanking[];
}

export interface TeamInformation {
    abbreviation: string;
    city: string;
    full_name: string;
    nickname: string;
    state: string;
    team_id: number;
    year_founded: number;
}