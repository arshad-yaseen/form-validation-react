interface Props {
    children?: React.ReactNode;
    onSubmit?: (values: any) => void;
    errorElement?: string;
    rules?: object;
    
}
declare function ValidateForm(props: Props): JSX.Element;
export default ValidateForm;
