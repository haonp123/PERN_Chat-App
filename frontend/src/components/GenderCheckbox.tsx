const GenderCheckbox = ({
  selectedGender,
  onCheckboxChange,
}: {
  selectedGender: string;
  onCheckboxChange: (gender: "male" | "female") => void;
}) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input
            value="male"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
            type="checkbox"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input
            value="female"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
            type="checkbox"
            className="checkbox border-slate-900"
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
