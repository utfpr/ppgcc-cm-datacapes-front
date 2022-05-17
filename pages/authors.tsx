import { useEffect, useState } from "react";
import { useAuthors } from "../services/hooks/useAuthors";

export default function Authors() {
  const [page, setPage] = useState(1);
  const { data} = useAuthors(
    page
  );

  useEffect(() => {
    console.log(data);
  }, [page]);

  return (
    <div>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
