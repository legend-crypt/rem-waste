import Loader from "../loader";
import useSkips from "../../hooks/useSkips";
import Listings from "../../presentational/skip/Listings";
function Skips() {
  const { skips, loading } = useSkips();
  return loading ? <Loader /> : <Listings skips={skips} />;
}

export default Skips;
