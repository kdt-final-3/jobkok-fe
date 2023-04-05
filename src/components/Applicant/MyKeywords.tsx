import { ReactComponent as IconSelect } from "@/assets/applicant/select.svg";
import { KEYWORDS_CHECK } from "@/constants/applicant";
import FieldBox from "@components/Applicant/FieldBox";
import FieldLegend from "@components/Applicant/FieldLegend";
import FieldParagraph from "@components/Applicant/FieldParagraph";

const MyKeywords = () => {
  return (
    <FieldBox>
      <FieldLegend>나의 키워드(필수)</FieldLegend>
      <FieldParagraph>해당되는 항목의 체크박스에 체크해주세요.</FieldParagraph>
      <div className="grid h-[108px] max-w-[820px] grid-cols-5 gap-2">
        {KEYWORDS_CHECK.map((keyword) => (
          <button
            className="SubHead2Semibold flex items-center justify-center gap-1 rounded-lg border border-gray-100 py-2.5 text-gray-500"
            key={keyword}
            type="button"
          >
            <IconSelect />
            {keyword}
          </button>
        ))}
      </div>
    </FieldBox>
  );
};
export default MyKeywords;