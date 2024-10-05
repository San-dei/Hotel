import { City } from "@/interface/useSearchCity";
import { useEffect, useState } from "react";

const useSearchCity = (searchParams: string) => {
  const [place, setPlace] = useState<City[]>([]);

  useEffect(() => {
    const url = `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${searchParams}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "9a5cff6e3fmshf32910d4afabd1fp16146djsn5068a517b2dc",
        "x-rapidapi-host": "booking-com.p.rapidapi.com",
      },
    };

    const getData = async () => {
      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setPlace(result);
      } catch (err) {
        throw err;
      }
    };
    if (searchParams) {
      getData();
    }
  }, [searchParams]);

  return {place};
};

export default useSearchCity;
