import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../api";

export interface Author {
  id: string;
  orcid: string;
  lattes_id: string;
  name: string;
  institution: string;
}

interface GetAuthorsResponse {
  authors: Author[];
  totalCount: number;
}

export async function getAuthors(page: number): Promise<GetAuthorsResponse> {
  const { data, headers } = await api.get("/authors", {
    params: {
      page,
    },
  });

  const totalCount = Number(headers["x-total-count"]);

  const authors = data.authors.map((author: Author) => {
    return {
      id: author.id,
      orcid: author.orcid,
      lattes_id: author.lattes_id,
      name: author.name,
      institution: author.institution,
    };
  });
  console.log(authors, totalCount)
  return { authors, totalCount };
}

export function useAuthors(page: number /*, options: UseQueryOptions */) {
  return useQuery(["authors", page], () => getAuthors(page), {
    staleTime: 1000 * 60 * 10,
    /*...options,*/
  });
}
