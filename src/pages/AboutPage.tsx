import Layout from "@/components/Layout";
import { GraduationCap, Award, BookOpen, Users, CheckCircle } from "lucide-react";

const AboutPage = () => (
  <Layout>
    <section className="bg-secondary/50 py-12">
      <div className="container text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Giới thiệu</h1>
        <p className="mt-2 text-muted-foreground">Đội ngũ giáo viên tâm huyết với hơn 10 năm kinh nghiệm</p>
      </div>
    </section>

    <section className="py-12">
      <div className="container max-w-3xl">
        <div className="rounded-xl border bg-card p-8 shadow-card">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full gradient-primary">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">Thầy Nguyễn Văn A</h2>
              <p className="text-sm text-muted-foreground">Giáo viên Toán – Thạc sĩ Toán học</p>
            </div>
          </div>

          <p className="mb-6 leading-relaxed text-muted-foreground">
            Với hơn 10 năm kinh nghiệm luyện thi vào 10 và THPT Quốc Gia, tôi đã giúp hàng ngàn học sinh 
            đạt điểm cao trong các kỳ thi quan trọng. Phương pháp giảng dạy của tôi tập trung vào việc hiểu 
            sâu bản chất toán học, không chỉ học thuộc công thức.
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              { icon: Award, text: "Thạc sĩ Toán học – ĐH Sư phạm Hà Nội" },
              { icon: Users, text: "5,000+ học sinh đã hướng dẫn" },
              { icon: BookOpen, text: "500+ bài giảng được biên soạn" },
              { icon: CheckCircle, text: "95% học sinh cải thiện điểm số" },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-3 rounded-lg bg-secondary/50 p-3">
                <item.icon className="mt-0.5 h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-foreground">Triết lý giảng dạy</h3>
            <p className="leading-relaxed text-muted-foreground">
              "Toán học không phải là môn học khô khan. Khi bạn hiểu được bản chất, mọi bài toán đều trở nên 
              thú vị và dễ giải. Tôi tin rằng mỗi học sinh đều có thể giỏi Toán nếu được hướng dẫn đúng phương pháp."
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AboutPage;
