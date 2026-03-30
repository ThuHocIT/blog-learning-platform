export default function Loading() {
  return (
    <div className="container py-16 animate-pulse">
      <div className="h-10 bg-gray-200 rounded w-1/2 mb-8"></div>
      <div className="h-100 bg-gray-200 rounded-xl mb-8"></div>
      <div className="space-y-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
}