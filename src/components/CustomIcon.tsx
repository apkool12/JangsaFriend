import React from "react";
import { Image, ImageSourcePropType } from "react-native";
import { SvgProps } from "react-native-svg";

interface CustomIconProps {
  source: ImageSourcePropType | React.FC<SvgProps>;
  size?: number;
  style?: any;
  color?: string;
}

export const CustomIcon: React.FC<CustomIconProps> = ({
  source,
  size = 24,
  style,
  color,
}) => {
  // SVG 컴포넌트인지 확인
  if (typeof source === "function") {
    const SvgComponent = source as React.FC<SvgProps>;
    return (
      <SvgComponent
        width={size}
        height={size}
        fill={color}
        color={color}
        style={style}
      />
    );
  }

  // 일반 이미지 파일인 경우
  return (
    <Image
      source={source as ImageSourcePropType}
      style={[
        {
          width: size,
          height: size,
          resizeMode: "contain",
          tintColor: color,
        },
        style,
      ]}
    />
  );
};
