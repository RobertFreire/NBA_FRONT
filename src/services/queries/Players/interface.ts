export interface Player {
    age: string | null;
    college: string;
    experience: number;
    height: string;
    id: number;
    image_url: string;
    name: string;
    position: string;
    salary: string | null;
    weight: string;
}

export interface TeamInformation {
    teamName: string;
    players: Player[];
}

export interface PlayerStats {
    player_id: number;
    average: {
        assists: number;
        points: number;
        rebounds: number;
    };
    median: {
        assists: number;
        points: number;
        rebounds: number;
    };
    mode: {
        assists: number;
        points: number;
        rebounds: number;
    };
    percentage_below_average: {
        assists: number;
        points: number;
        rebounds: number;
    };
    standard_deviation: {
        assists: number;
        points: number;
        rebounds: number;
    };
}

export interface PlayerSeasonVsCareer {
    career: {
        average_assists: number;
        average_points: number;
        average_rebounds: number;
        total_games: number;
        total_minutes: number;
    };
    player_id: number;
    season: {
        average_assists: number;
        average_points: number;
        average_rebounds: number;
        total_games: number;
        total_minutes: number;
    };
}

export interface PlayerGame {
    Adversario: string;
    Assistencias: number;
    BLK: number;
    "Casa/Fora": string;
    "Cestas de 3 PTS Marcados": number;
    DREB: number;
    "Data do Jogo": string;
    FG3_PCT: number;
    FGA: number;
    FGM: number;
    FG_PCT: number;
    FTA: number;
    FTM: number;
    FT_PCT: number;
    Game_ID: string;
    OREB: number;
    PF: number;
    PLUS_MINUS: number;
    "Placar do Jogo": string;
    Player_ID: number;
    Pontos: number;
    Rebotes: number;
    SEASON_ID: string;
    STL: number;
    TOV: number;
    "Tempo de Permanencia do Jogador em Quadra": number;
    "Tentativas de Cestas de 3": number;
    "V ou D": string;
    VIDEO_AVAILABLE: number;
}

export interface PlayerGamesHomeAndAway {
    away_vs_opponent: number;
    home_vs_opponent: number;
    total_away_games: number;
    total_home_games: number;
}

export interface PlayerCareerStats {
    career: {
        total_assists: number;
        total_points: number;
        total_rebounds: number;
    };
    player_id: number;
}

export interface GumbelStats {
    above_x: number;
    at_least_x: number;
    below_x: number;
    exactly_x: number;
}

export interface PlayerGumbelStats {
    gumbel_assists: GumbelStats;
    gumbel_points: GumbelStats;
    gumbel_rebounds: GumbelStats;
}

export interface PlayerProbabilities {
    acima_da_media: number;
    abaixo_da_media: number;
    acima_da_mediana: number;
    abaixo_da_mediana: number;
    acima_da_moda: number;
    abaixo_da_moda: number;
    acima_do_maximo: number;
    abaixo_do_minimo: number;
}

export interface RocCurve {
    fpr: number[];
    tpr: number[];
    roc_auc: number;
}

export interface PlayerRegressionLinearStats {
    assists_probabilities: PlayerProbabilities;
    player_id: number;
    points_probabilities: PlayerProbabilities;
    rebounds_probabilities: PlayerProbabilities;
    points_confusion_matrix: number[][];
    points_roc_curve: RocCurve;
}

export interface PlayerProbabilities {
    accuracy: number;
    confusion_matrix: number[][];
    roc_auc: number;
}

export interface PlayerRegressionLogisticStats {
    assists_probabilities: PlayerProbabilities;
    player_id: number;
    points_probabilities: PlayerProbabilities;
    rebounds_probabilities: PlayerProbabilities;
}

export interface PlayerGAMStats {
    assists_mse: number;
    assists_probabilities: PlayerProbabilities;
    assists_r2: number;
    player_id: number;
    points_mse: number;
    points_probabilities: PlayerProbabilities;
    points_r2: number;
    rebounds_mse: number;
    rebounds_probabilities: PlayerProbabilities;
    rebounds_r2: number;
}