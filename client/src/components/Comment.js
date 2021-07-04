const Comment = ({ comment }) => {

  const date = new Date(comment.timestamp);
  const date_formated = date.toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });

  return (
    <div className="shadow-lg rounded-lg p-4 mb-8 bg-gray-50">
      <div className="text-gray-800 text-sm font-bold pb-3 break-words">
        {comment.user}
      </div>
      <div className="text-gray-800 text-sm pb-3 break-words">
        {comment.body}
      </div>
      <div className="text-gray-800 text-sm">
        {date_formated === "Invalid Date"
          ? new Date().toLocaleDateString("en-gb", {
              year: "numeric",
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit",
            })
          : date_formated}
      </div>
    </div>
  );
};

export default Comment;