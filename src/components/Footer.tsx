import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="border-t bg-card">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
              <GraduationCap className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-lg font-bold text-foreground">MathVN</span>
          </Link>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Hệ thống học Toán trực tuyến theo chuẩn SGK Việt Nam, giúp học sinh từ lớp 6 đến 12 chinh phục mọi kỳ thi.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Khóa học</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/khoa-hoc" className="hover:text-primary transition-colors">Toán 6 – 9</Link></li>
            <li><Link to="/khoa-hoc" className="hover:text-primary transition-colors">Toán 10 – 12</Link></li>
            <li><Link to="/on-thi" className="hover:text-primary transition-colors">Ôn thi vào 10</Link></li>
            <li><Link to="/on-thi" className="hover:text-primary transition-colors">Ôn thi THPT QG</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Hỗ trợ</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/gioi-thieu" className="hover:text-primary transition-colors">Giới thiệu</Link></li>
            <li><Link to="/lien-he" className="hover:text-primary transition-colors">Liên hệ</Link></li>
            <li><Link to="/lien-he" className="hover:text-primary transition-colors">Câu hỏi thường gặp</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-3">Liên hệ</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contact@mathvn.edu.vn</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> 0912 345 678</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Hà Nội, Việt Nam</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
        © 2024 MathVN. Bản quyền thuộc về MathVN.
      </div>
    </div>
  </footer>
);

export default Footer;
