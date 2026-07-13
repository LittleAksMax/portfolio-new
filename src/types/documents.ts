export type DocumentType = "overview" | "project";

export interface DocumentRecord {
  id: string;
  title: string;
  type: DocumentType;
  isClosable: boolean;
  slug?: string;
  description?: string;
  tags?: string[];
  year?: string;
}

export interface OpenDocumentInput {
  id: string;
  title: string;
  type: DocumentType;
  isClosable?: boolean;
  slug?: string;
  description?: string;
  tags?: string[];
  year?: string;
}
