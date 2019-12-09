export interface BookmarkModel {
  id: string;
  isFolder: boolean;
  parentId: string;
  title: string;
  url?: string;
  children?: BookmarkModel[];
}
