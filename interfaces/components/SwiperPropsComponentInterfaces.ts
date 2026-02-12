export interface SwiperProps<T> {
  data?: T[] | null;
  autoplay?: boolean;
  loop?: boolean;
  spaceBetween?: number;
  slidesPerView?: number | "auto";
  navigation?: boolean;
  pagination?: boolean;
  className?: string;
  swiperWrapperClassName?: string;
  swiperSlideClassName?: string;
  renderItem?: (item: T, index: number) => React.ReactNode;
  direction?: "horizontal" | "vertical";
  centerInsufficientSlides?: boolean;
}
