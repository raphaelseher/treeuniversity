
// Parameters are called Props in React.
type pProps = JSX.IntrinsicElements['p']
interface PlaceholderTextProps extends pProps {
    value: string | undefined,
    placeholder: string
};
// https://stackoverflow.com/questions/56105006/how-to-extend-jsx-intrinsicelementsdiv-ts2499
function PlaceholderText(props: PlaceholderTextProps) {
    const placeholderCSSClass = "text-placeholder"
    const hasValue: boolean = (props.value != undefined && props.value.length != 0);
    const text: string = (props.value) ? props.value : props.placeholder;

    if ((props?.value ?? "").length == 0) {
        props = {...props, className: (props.className ?? "") + " " + placeholderCSSClass};
    }

  return (
      <p {...props}>{text}</p>
  );
}


export default PlaceholderText;
