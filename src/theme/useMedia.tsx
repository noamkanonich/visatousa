import { useEffect, useState } from "react";

const createMedia = (width: number) => ({
  isBreak1: width < 900,
  isBreak2: width >= 900,
});

const useMedia = () => {
  const [media, setMedia] = useState(createMedia(window.innerWidth));

  useEffect(() => {
    const subscription = window.addEventListener(
      "change",
      ({ window }: any) => {
        const newMedia = createMedia(window.width);
        if (
          newMedia.isBreak1 !== media.isBreak1 ||
          newMedia.isBreak2 !== media.isBreak2
        ) {
          setMedia(newMedia);
        }
      }
    );
    return () => subscription;
  }, [media]);
  return media;
};

export default useMedia;
