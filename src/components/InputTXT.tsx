/* eslint-disable @typescript-eslint/no-explicit-any */
type inputProps = {
  txtPlace: string;
  className: string;
  handleChange: (event: any) => void
  type: string
};



function InputTXT({ txtPlace, className, handleChange, type }: inputProps) {

  return (
    <input
      type={type}
      placeholder={txtPlace}
      className={className}
      onChange={handleChange}
      required
    />
  );
}

export default InputTXT;
