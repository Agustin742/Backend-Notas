import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },

    content: {
      type: String,
      required: true,
      trim: true
    },

    archived: {
      type: Boolean,
      require: false,
      trim: true
    },

    tags: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag"
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Note", NoteSchema);
