import { useForm, useFormContext } from "react-hook-form";
import FieldBox from "@components/Applicant/FieldBox";
import FieldLegend from "@components/Applicant/FieldLegend";
import FieldLabel from "../FieldLabel";

const CoverLetter = () => {
  const { register, watch } = useFormContext();
  return (
    <FieldBox>
      <FieldLegend>자기소개(필수)</FieldLegend>
      <p className="Head4Medium text-gray-700">
        본인 대해 자유롭게 서술해주세요.
      </p>
      <div className="flex h-[272px] items-center gap-4 rounded-lg border border-gray-100 bg-gray-0 px-6">
        <FieldLabel className="w-20" htmlFor="resumeContent">
          지원자 작성란
        </FieldLabel>
        <textarea
          className="h-full w-full resize-none py-4 focus:outline-none"
          id="resumeContent"
          placeholder="위 주제에 대해 자유롭게 서술해주세요.(최소 20자 이상)"
          maxLength={1000}
          {...register("resumeContent")}
        ></textarea>
      </div>
      <div className="Caption1Medium mt-[-16px] text-gray-400">
        {watch().resumeContent?.length}
        /1000자(공백포함)
      </div>
    </FieldBox>
  );
};
export default CoverLetter;