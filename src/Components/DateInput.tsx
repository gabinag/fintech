import React from 'react'

type IDateInput = React.ComponentProps<"input"> & {
    label: string;
};

const generalStyle: React.CSSProperties = {
  fontSize: "1rem",
  color: "var(--color-1)",
  padding: "var(--gap-s) .75rem",
  backgroundColor: "var(--color-4)",
  borderRadius: "var(--gap)",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "var(--gap-s)",
  fontWeight: "600",
  ...generalStyle
}

const inputStyle: React.CSSProperties = {
  border: "none",
  fontFamily: "monospace",
  ...generalStyle
}

const DateInput = ({label, ...props}: IDateInput) => {
  return (
    <div>
        <label htmlFor={label} style={labelStyle}>{label}</label>
        <input type="date" id={label} name={label} {...props} style={inputStyle}/>
    </div>
  );
};

export default DateInput