const LocalVideoPlayer = ({
  src,
  width,
  height,
}: {
  src: string;
  width: number;
  height: number;
}) => {
  return (
    <div className="w-full flex justify-center py-6">
      <video width={width} height={height} controls controlsList="nofullscreen">
        <source src={`/videos/${src}.mp4`} type="video/mp4" />
      </video>
    </div>
  );
};

export default LocalVideoPlayer;
