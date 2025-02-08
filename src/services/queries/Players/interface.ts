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