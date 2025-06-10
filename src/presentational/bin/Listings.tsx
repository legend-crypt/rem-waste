import React from "react";
import type { IBinProps } from "../../types/bin";
import ListingGrid from "./ListingGrid";
import Listing from "./Listing";

function Listings({ bins }: { bins: IBinProps[] }) {
  return (
    <ListingGrid>
      {bins?.map((bin) => (
        <Listing bin={bin} key={bin.id} />
      ))}
    </ListingGrid>
  );
}

export default Listings;
