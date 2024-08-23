import Player from "../components/Player";
import PlayerCSS from "../components/PlayerCss";

export default function Index() {
  const videoJsOptions = {
    techOrder: ["youtube"],
    autoplay: false,
    controls: true,
    sources: [
      {
        src: "https://www.youtube.com/watch?v=IxQB14xVas0",
        type: "video/youtube",
      },
    ],
  };

  return (
    <>
      This is just for the sake of it again adn again
      <Player {...videoJsOptions} />
      <PlayerCSS />
    </>
  );
}
