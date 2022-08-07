import useC2BContext from "../hooks/useC2BContext";
import C2BService from "../services/c2b.service";

const ContactForm = ({ next }: any) => {
  const context = useC2BContext();
  const c2bService = new C2BService(context);

  return (
    <>
      <h1>ContactForm</h1>

      <button onClick={() => c2bService.postOrder()}>Next</button>
    </>
  );
};

export default ContactForm;
