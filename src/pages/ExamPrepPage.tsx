import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Clock, FileText, BarChart3, ArrowRight, Trophy } from "lucide-react";

const mockExams = [
  { title: "Đề thi thử vào 10 – Đề 1", time: 120, questions: 50, difficulty: "Trung bình" },
  { title: "Đề thi thử vào 10 – Đề 2", time: 120, questions: 50, difficulty: "Khó" },
  { title: "Đề thi thử THPT QG – Đề 1", time: 90, questions: 50, difficulty: "Trung bình" },
  { title: "Đề thi thử THPT QG – Đề 2", time: 90, questions: 50, difficulty: "Khó" },
  { title: "Đề thi thử THPT QG – Đề 3", time: 90, questions: 50, difficulty: "Rất khó" },
  { title: "Đề tổng ôn – Đại số", time: 60, questions: 30, difficulty: "Trung bình" },
];

const ExamPrepPage = () => (
  <Layout>
    <section className="bg-secondary/50 py-12">
      <div className="container text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Ôn thi</h1>
        <p className="mt-2 text-muted-foreground">Đề thi thử vào 10 & THPT Quốc Gia – Chấm điểm tự động</p>
      </div>
    </section>

    <section className="py-10">
      <div className="container">
        <div className="mb-8 rounded-xl border bg-card p-6 shadow-card">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-foreground">🏆 Bảng xếp hạng tuần này</h2>
              <p className="text-sm text-muted-foreground">Top 3 học sinh có điểm cao nhất</p>
            </div>
            <div className="flex gap-4">
              {["Minh Anh – 9.6đ", "Đức Huy – 9.4đ", "Thu Hà – 9.2đ"].map((s, i) => (
                <div key={s} className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm">
                  <Trophy className={`h-4 w-4 ${i === 0 ? "text-amber-500" : i === 1 ? "text-gray-400" : "text-amber-700"}`} />
                  <span className="font-medium text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockExams.map((e) => (
            <div key={e.title} className="rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-elevated">
              <h3 className="mb-3 font-bold text-foreground">{e.title}</h3>
              <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" /> {e.time} phút</li>
                <li className="flex items-center gap-2"><FileText className="h-4 w-4 text-primary" /> {e.questions} câu hỏi</li>
                <li className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-primary" /> {e.difficulty}</li>
              </ul>
              <Button className="w-full" size="sm">Bắt đầu thi <ArrowRight className="ml-1 h-4 w-4" /></Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default ExamPrepPage;
