/**
 * Types for the likes/views system
 */

export interface LikeResponse {
  success: boolean;
  likes?: number;
  error?: string;
}

export interface ViewResponse {
  success: boolean;
  views?: number;
  error?: string;
}

export interface StatsResponse {
  success: boolean;
  likes?: number;
  views?: number;
  error?: string;
}

export interface StatsUpdateDetail {
  likes: number | null;
  views: number | null;
}
