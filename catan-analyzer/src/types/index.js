export interface BoardState {
    hexes: Hex[];
    resources: Resource[];
    settlements: Settlement[];
    cities: City[];
}

export interface Hex {
    id: number;
    resource: ResourceType;
    number: number;
}

export enum ResourceType {
    WOOD = "wood",
    BRICK = "brick",
    SHEEP = "sheep",
    WHEAT = "wheat",
    ORE = "ore"
}

export interface Settlement {
    id: number;
    position: Position;
}

export interface City {
    id: number;
    position: Position;
}

export interface Position {
    x: number;
    y: number;
}

export interface BuildingOption {
    type: BuildingType;
    cost: Resource[];
    probability: number;
}

export enum BuildingType {
    SETTLEMENT = "settlement",
    CITY = "city",
    ROAD = "road"
}