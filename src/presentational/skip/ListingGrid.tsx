import type { ReactNode } from "react";

function ListingGrid({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-wrap justify-center items-center content-center gap-6">
      {children}
    </div>
  );
}

export default ListingGrid;
