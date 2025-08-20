import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import Navbar from "../components/Navbar";
import RateLimitedUI from "../components/RateLimitedUI";
import NoteCard from "../components/NoteCard";

import api from "../lib/axios";
import NotesNotFound from "../components/NotesNotFound";
import NoteCardSkeleton from "../components/NoteCardSkeleton";

import GeneralErrorUI from "../components/GeneralErrorUI";

const Home = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setError(false);
      setIsRateLimited(false);
      try {
        const res = await api.get("/notes");
        setNotes(res.data);
      } catch (error) {
        console.error("Error fetching notes:", error);
        if (error?.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          setError(true);
          toast.error("Failed to load notes");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      {isRateLimited && <RateLimitedUI />}

      {error && <GeneralErrorUI />}

      <div className="max-w-7xl mx-auto p-4 mt-6">
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <NoteCardSkeleton key={i} />
            ))}
          </div>
        )}

        {notes.length === 0 && !isRateLimited && !isLoading && !error && (
          <NotesNotFound />
        )}

        {notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note) => {
              return (
                <NoteCard key={note._id} note={note} setNotes={setNotes} />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
