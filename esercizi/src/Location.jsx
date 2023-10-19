import { useCurrentLocation } from "./useCurrentLocation";


export function Location() {
  const { location, error, loading } = useCurrentLocation();

  if (loading) {
    return <p>Sto cercando la tua posizione...</p>;
  }

  if (error) {
    return <p>Si è verificato un errore: {error.message}</p>;
  }

  return (
    <div>
      <p>Latitudine: {location.latitude}</p>
      <p>Longitudine: {location.longitude}</p>
    </div>
  );
}

