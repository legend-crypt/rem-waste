import Listings from "../../presentational/bin/Listings";
import useBins from "../../hooks/useBins";
import Loader from "../loader";
function Bins() {
  const { bins, loading } = useBins();
  return loading ? <Loader /> : <Listings bins={bins} />;
}

export default Bins;
