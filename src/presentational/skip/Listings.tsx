import ListingGrid from "./ListingGrid";
import Listing from "./Listing";
import type { ISkip } from "../../types/skip";
import { useState } from "react";

function Listings({ skips }: { skips: ISkip[] }) {
  const [selected, setSelected] = useState(0);
  return (
    <ListingGrid>
      {skips?.map((skip) => (
        <Listing
          skip={skip}
          key={skip.id}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </ListingGrid>
  );
}

export default Listings;
