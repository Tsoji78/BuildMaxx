import type { Certification } from './types';

interface PdfModalProps {
  cert: Certification;
  onClose: () => void;
}

export default function PdfModal({ cert, onClose }: PdfModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-5xl h-[80vh] bg-white rounded-3xl overflow-hidden shadow-xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-slate-900/90 px-3 py-2 text-sm text-white hover:bg-slate-900"
        >
          Close
        </button>
        <iframe
          src={cert.pdfUrl}
          title={cert.title}
          className="w-full h-full border-0"
        />
      </div>
    </div>
  );
}
