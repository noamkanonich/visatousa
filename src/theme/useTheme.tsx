import useMedia from "./useMedia";
import { DefaultTheme } from "styled-components";
import { useMemo, useState } from "react";

type Dir = "ltr" | "rtl";

type useThemeResult = {
  theme: DefaultTheme;
  setDir: (dir: Dir) => void;
};

const useTheme: () => useThemeResult = () => {
  const media = useMedia();
  const [dir, setDir] = useState<Dir>("ltr");

  const theme = useMemo<DefaultTheme>(
    () => ({
      media,
      dir,
    }),
    [media, dir]
  );

  return {
    theme,
    setDir: setDir as (dir: Dir) => void,
  };
};

export default useTheme;
