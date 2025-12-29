import { Hammer } from 'lucide-react';
import { GEMI_NUMBER, VAT_NUMBER, BUSINESS_NAME } from "./globals";

const ConstructionModal = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-50 p-4">
      {/* Background Decor */}
      {/* <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
      </div> */}

      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center border border-slate-100">
        {/* Icon Container */}
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-100 text-yellow-600 rounded-2xl mb-6">
          <Hammer size={40} />
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          Είμαστε υπό κατασκευή!
        </h1>
        
        <p className="text-slate-600 mb-8 leading-relaxed">
          Το νέο site της επιχείρησης θα είναι σύντομα διαθέσιμο.
        </p>

        {/* Business Info (Απαραίτητο για το ΓΕΜΗ) */}
        <div className="bg-slate-50 rounded-2xl p-4 mb-8 text-sm text-slate-500">
          <p className="font-semibold text-slate-700">Στοιχεία Επιχείρησης:</p>
          <p>Επωνυμία: [{BUSINESS_NAME}]</p>
          <p>Αρ. ΓΕΜΗ: [{GEMI_NUMBER}]</p>
          <p>ΑΦΜ: [{VAT_NUMBER}]</p>
        </div>

        {/* Contact Button */}
        {/* <a 
          href="mailto:info@yourdomain.gr" 
          className="inline-flex items-center justify-center w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200 gap-2"
        >
          <Mail size={18} />
          Επικοινωνήστε μαζί μας
        </a> */}
      </div>
    </div>
  );
};

export default ConstructionModal;