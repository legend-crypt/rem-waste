import ListingGrid from "./ListingGrid";
import Listing from "./Listing";
import type { ISkip } from "../../types/skip";
import { useState } from "react";

function Listings({ skips }: { skips: ISkip[] }) {
  const [selected, setSelected] = useState(0);
  return (
    <div className="text-center mb-8">
      <h2 className="text-3xl mb-4 text-white font-black">Available Skips</h2>
      <p className="text-white mb-6">Click on a skip to schedule a pickup.</p>
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
    </div>
  );
}

export default Listings;
