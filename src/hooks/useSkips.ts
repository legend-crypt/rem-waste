import { useState, useEffect } from 'react';

function useSkips() {
  const [skips, setSkips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBins = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        setSkips(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBins();
  }, []);

  return {
    skips,
    loading,
    error,
  };
}

export default useSkips;
