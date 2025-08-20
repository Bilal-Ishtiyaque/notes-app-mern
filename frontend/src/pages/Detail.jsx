import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast from "react-hot-toast";
import { LoaderIcon, Trash2Icon, ArrowLeftIcon, FileX } from "lucide-react";

const Detail = () => {
  const [note, setNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();

  const { id } = useParams();

  const { state } = useLocation();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data);
      } catch (error) {
        console.error("Error in fetching note:", error);

        const status = error?.response?.status;

        if (status === 429) {
          toast.error("Too many requests", {
            duration: 2000,
          });
        } else if (status === 400) {
          toast.error(error.response?.data?.message || "Bad request");
        } else if (status === 404) {
          toast.error("Note not found");
        } else {
          toast.error("Failed to load note");
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (state?.note) {
      setNote(state.note);
      setIsLoading(false);
      return;
    }

    fetchNote();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Do you want to delete the note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error deleting the note:", error);

      const status = error?.response?.status;

      if (status === 429) {
        toast.error("Slow down! You're deleting notes too fast", {
          duration: 2000,
        });
      } else if (status === 400) {
        toast.error(error.response?.data?.message || "Bad request");
      } else if (status === 404) {
        toast.error("Note not found");
      } else {
        toast.error("Failed to delete note");
      }
    }
  };

  const handleSave = async () => {
    if (!note.title.trim() || !note.content.trim()) {
      toast.error("Both fields must be filled out");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`, note);
      toast.success("Note updated successfully!");
      navigate("/");
    } catch (error) {
      console.error("Error saving the note:", error);
      const status = error?.response?.status;

      if (status === 429) {
        toast.error("Slow down! You're updating notes too fast", {
          duration: 2000,
        });
      } else if (status === 400) {
        toast.error(error.response?.data?.message || "Bad request");
      } else if (status === 404) {
        toast.error("Note not found");
      } else {
        toast.error("Failed to update note");
      }
    } finally {
      setSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  if (!note) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-16 space-y-6 max-w-md mx-auto text-center">
        <div className="bg-warning/10 rounded-full p-8">
          <FileX className="w-10 h-10 text-warning" />
        </div>
        <h3 className="text-2xl font-bold ">Note not found</h3>
        <p className="text-base-content/70">
          The note you're looking for doesn't exist.
        </p>
        <Link to="/" className="btn btn-warning">
          Go Back Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="size-5" />
              Back to Notes
            </Link>

            <button
              onClick={handleDelete}
              className="btn btn-error btn-outline"
            >
              <Trash2Icon className="size-5" />
              Delete Note
            </button>
          </div>

          <div className="card bg-base-100">
            <div className="card-body">
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Note title"
                  className="input input-bordered"
                  value={note?.title}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Content</span>
                </label>
                <textarea
                  placeholder="Write your note here"
                  className="textarea textarea-bordered h-32"
                  value={note?.content}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </div>

              <div className="card-actions justify-end">
                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
