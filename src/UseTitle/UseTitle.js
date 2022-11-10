import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - WIFI House`;
  }, [title]);
};


export default useTitle