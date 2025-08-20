const NoteCardSkeleton = () => {
  return (
    <div className="card bg-base-100 border-t-4 border-[#00FF9D] animate-pulse">
      <div className="card-body space-y-4">
        <div className="h-5 bg-base-300 rounded w-3/4"></div>
        <div className="h-4 bg-base-300 rounded w-full"></div>
        <div className="flex justify-between items-center mt-4">
          <div className="h-4 w-20 bg-base-300 rounded"></div>
          <div className="flex gap-2">
            <div className="size-4 bg-base-300 rounded"></div>
            <div className="size-4 bg-base-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCardSkeleton;
