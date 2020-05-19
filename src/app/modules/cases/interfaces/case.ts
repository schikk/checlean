export interface Case {
  id: number;
  details: string;
  location: Location;
  image_url: string;
  status: CaseStatus;
  created_at: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export enum CaseStatus {
  ACTIVE = 0,
  RESOLVED = 1
}
