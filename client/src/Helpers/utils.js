import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { EMAILJS } from "../Config/config";

export function blobToUrl(blob, cb) {
  if (!blob) return cb(null);
  const fr = new FileReader();
  fr.onload = () => cb(fr.result);
  fr.readAsDataURL(blob);
}

export const route = (
  path,
  { component, redirect = false, layout = true, ...args }
) => ({
  path,
  component,
  exact: true,
  layout,
  redirect,
  ...args,
});

export async function sendForm(data) {
  try {
    const emailForMe = await emailjs.send(
      EMAILJS.SERVICE_ID,
      EMAILJS.TEMPLATE_ID_FOR_ME,
      data,
      EMAILJS.USER_ID
    );
    
    await emailjs.send(
      EMAILJS.SERVICE_ID,
      EMAILJS.TEMPLATE_ID_FOR_USER,
      data,
      EMAILJS.USER_ID
    );

    if (emailForMe.status === 200) {
      toast.success("Formulario enviado");
    } else {
      toast.error("Ocurrió un error al enviar, estado: " + emailForMe.status);
    }
  } catch (error) {
    toast.error("Ocurrió un error al enviar el formulario");
    console.log(error);
  }
}
