export type DocumentType =
  | "overview"
  | "project"
  | "experience"
  | "education"
  | "certification";

export interface DocumentRecord {
  id: string;
  title: string;
  type: DocumentType;
  isClosable: boolean;
  role?: string;
  slug?: string;
  description?: string;
  highlights?: string[];
  tags?: string[];
  year?: string;
}

export interface OpenDocumentInput {
  id: string;
  title: string;
  type: DocumentType;
  isClosable?: boolean;
  role?: string;
  slug?: string;
  description?: string;
  highlights?: string[];
  tags?: string[];
  year?: string;
}
