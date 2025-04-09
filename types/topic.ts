import { CoverPhoto, PreviewPhoto } from "./photo";
import { User } from "./user";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Tag {
  type: string;
  title: string;
}

interface TopicLinks {
  self: string;
  html: string;
  photos: string;
  related: string;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  published_at: string;
  last_collected_at: string;
  updated_at: string;
  featured: boolean;
  total_photos: number;
  private: boolean;
  share_key: string;
  tags: Tag[];
  links: TopicLinks;
  user: User;
  cover_photo: CoverPhoto;
  preview_photos: PreviewPhoto[];
}
