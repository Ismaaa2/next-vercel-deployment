import { FC, PropsWithChildren } from "react";

export const LightLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFFF3",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>Light-Layout</h3>
      {children}
    </div>
  );
};
