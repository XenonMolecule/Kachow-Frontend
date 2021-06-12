import spotifylogo from '.././Spotify_Logo_RGB_Green.png'

function SpotifyLogin() {
  return (
    <img src={spotifylogo} className="Spotify-logo" alt="spotify" onClick = {() => {document.location = "/auth/login"}}/>
  );
}

export default SpotifyLogin;