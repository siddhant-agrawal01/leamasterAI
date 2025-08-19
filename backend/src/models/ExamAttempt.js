import mongoose from 'mongoose';

const answerSchema = new mongoose.Schema({
  questionId: { type: mongoose.Schema.Types.ObjectId, ref: 'Question', required: true },
  selectedIndex: { type: Number, required: true }
}, { _id: false });

const examAttemptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startedAt: { type: Date, required: true },
  durationMinutes: { type: Number, required: true },
  submittedAt: { type: Date },
  answers: [answerSchema],
  score: { type: Number, default: 0 },
  total: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model('ExamAttempt', examAttemptSchema);