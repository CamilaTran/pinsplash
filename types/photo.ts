import { User } from "./user";
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface CoverPhotoUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface CoverPhotoLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface PreviewPhoto {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  blur_hash: string;
  asset_type: string;
  urls: CoverPhotoUrls;
}

interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

interface TopicSubmissions {
  [key: string]: {
    status: string;
  };
}

export interface CoverPhoto {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  breadcrumbs: any[];
  urls: CoverPhotoUrls;
  links: CoverPhotoLinks;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: any;
  topic_submissions: TopicSubmissions;
  asset_type: string;
  user: User;
}

export interface Photo {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  likes: number;
  liked_by_user: boolean;
  description: string;
  user: User;
  current_user_collections: {
    id: number;
    title: string;
    published_at: string;
    last_collected_at: string;
    updated_at: string;
    cover_photo: string | null;
    user: any;
  }[];
  urls: CoverPhotoUrls;
  links: CoverPhotoLinks;
}
